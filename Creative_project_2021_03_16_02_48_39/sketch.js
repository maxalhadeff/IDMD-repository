//rectangular pattern
let cols = 10;
let rows = 5;
let count = 0;
let x1 = [];
let y1 = [];
let c1 = [];
let startX, startY, stopX, stopY;
let xi, yi;
let pct = 0;
let step = 0.15;
let dir = 1;
let index = 0;
let rowcolor;

function setup() {
  createCanvas(435, 345);
  background('pink');
  // calculate offset in pixels
  let xoff = width / (cols + 1);
  let yoff = height / (rows + 1);
  strokeWeight(3);
  for (let i = 0; i < rows; i++) { // slowest loop
    rowcolor = randomcolor();
    let y = (i + 1) * yoff; // calculate y pixel
    if (dir == 1) {
      for (let j = 0; j < cols; j++) { // fastest loop
        let x = (j + 1) * xoff; // calculate x pixel   
        //text("" + ++count, x, y); // draw the item  
        x1.push(x);
        y1.push(y);
        c1.push(rowcolor);
      }


    } else {
      for (let j = cols; j > 0; j--) { // fastest loop
        let x = (j) * xoff; // calculate x pixel  
        //text("" + ++count, x, y); // draw the item
        x1.push(x);
        y1.push(y);
        c1.push(rowcolor);
      }

    }
    dir *= -1;
  }
}

function draw() {

  background('pink');
  startX = x1[index];
  startY = y1[index];
  stopX = x1[index + 1];
  stopY = y1[index + 1];
  // background(0);
  if (pct < 1.0) {
    xi = startX + ((stopX - startX) * pct);
    yi = startY + ((stopY - startY) * pct);
    pct += step;
  }
 
  fill(c1[index]);
  ellipse(xi, yi, 20, 20);
  if (pct >= 1) {
    ++index;
    pct = 0;
  }
  //print(index);
  if (index >= rows * cols - 1) index=0;
}
function randomcolor() {
  return color(random(255),random(255),random(255));
  
}