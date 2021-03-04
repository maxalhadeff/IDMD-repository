// 2D Row Wise Pattern
// rectangular pattern
let cols = 4;
let rows = 3;
let count = 0;
function setup() {
  createCanvas(435, 345);
  background('pink');
  textAlign(CENTER, CENTER);
  // calculate offset in pixels
  let xoff = width / (cols + 1);
  let yoff = height / (rows + 1);
  strokeWeight(3);
  // 2D loop for col-wise drawing pattern
  for (let i = 0; i < cols; i++) {   // slowest loop
    let x = (i + 1) * xoff;          // calculate x pixel
    for (let j = 0; j < rows; j++) { // fastest loop
      let y = (j + 1) * yoff;        // calculate y pixel   
      text(""+ ++count,x, y)         // draw the item
    }
  }
}
function draw() {
  //background(220);
}