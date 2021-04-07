let nmax = 1;
let phase = 0;
let zoff;
let color_button;
let clr;
let r,g,b;
function setup() {
  createCanvas(400, 400);
  clr = color ('cyan');
  slider = createSlider(1, 5, 2, 0.1);
  color_button = createButton('change color');
  color_button.mousePressed(changeColor);
  
}
function draw() {
  background(0);
  let ainc = slider.value();
  translate(width/2, height/2);
  stroke(255);
  fill(clr);
  beginShape();
  for (let a = 0; a < TWO_PI; a+= ainc) {
    //let r = random(150, 200);
    let xoff = map(cos(a+phase), -1, 1, 0, nmax);
    let yoff = map(sin(a+phase), -1, 1, 0, nmax);
    let r = map(noise(xoff, yoff), 0, 1, 100, 200);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x,y);
    xoff += 0.5;
    yoff += 0.5;
  }
  endShape(CLOSE);
  phase += 0.1;
  //noLoop();
}
function changeColor(){
  r = random(255);
  g = random(255);
  b = random(255);
  clr = color(r, g, b);
}
















