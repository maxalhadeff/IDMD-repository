var r, g, b, t;
function setup() {
  createCanvas(600, 400);
  r = random(255);
  g = random(255);
  b = random(255);
  t = random(255);
}
function draw() {
  background(204);
  geoShapes(r, g, b, t);
  arcShape(r, g, b, t);
}
function geoShapes(r, g, b, t) {
  strokeWeight(5);
  point(width / 2, height / 2);
  fill(0, 0, 0);
  rect(width - 50, height - 200, 50, 200);
  stroke(255, 0, 0);
  line(0, 0, width, height);
  stroke(0, 255, 0);
  line(0, height, width, 0);
  noStroke();
  fill(0, 0, 255);
  triangle(width / 2, height / 2, width / 2 + 100, height, width / 2 - 100, height);
}
function arcShape(r, g, b, t) {
  translate(width / 2, height / 2);
  rotate(radians(frameCount));
  fill(r, g, b, t);
  arc(0, 0 / 2, 200, 200, PI, HALF_PI)
}