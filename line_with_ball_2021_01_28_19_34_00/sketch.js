var r,g,b;

function setup() {
  createCanvas(500, 500);
  background(0, 0, 255);
}

function draw() {
  if(mouseIsPressed) {
    stroke(255, 255, 255);
    ellipse(mouseX, mouseY, 25, 24);
    fill(r,g, b);
  r = random(255);
  g = random(255);
  b = random(255);
    line(150, 150, mouseX, mouseY);
  }
}

  