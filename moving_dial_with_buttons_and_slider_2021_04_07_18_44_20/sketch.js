let res = 40;
let rows, cols;
let xoff, yoff, zoff = 1;
let inc = 0.1;
let value_text;
let value;
let intensity_slider;
let r,g,b;
let color_button;

function setup() {
  createCanvas(400, 400);
  clr = color('cyan');
  rows = height/res;
  cols = width/res;
  noStroke();
  intensity_slider = createSlider(1, 10, 5, 0.1);
  value_text = createP('the intensity is: ' + value);
  color_button = createButton('change color');
  color_button.mousePressed(changeColor);

}
function draw() {
  background(220);
  value = intensity_slider.value();
  value_text.html('the intensity is: ' + nf(value / 100, 1, 2));
  yoff = 100;
  for(let i=0; i<rows; i++) {
    xoff = 300;
    for(let j=0; j<cols; j++) {
      n = noise(xoff, yoff, zoff)*255;
      fill(n + r, g, b)
      rect(i*res, j*res, res, res);
      let dx = i*res+10;
      let dy = j*res+10;
      drawDial(dx, dy, n);
      xoff += value/100;
    }
    yoff += value/100;
  }

  zoff += value/100;
}
function drawDial(x, y, n) {
  push();
  translate(x+10, y+10);
  stroke('blue');
  let a = map(n, 0, 255, 0, TWO_PI); 
  let angle = atan(a);
  ellipse(0, 0, 5, 5);
  rotate(angle*10);
  line(0, 0, 0, -20);
  noStroke();
  pop();
}
function changeColor(){
  r = random(255);
  g = random(255);
  b = random(255);
  clr = color(r, g, b);
}