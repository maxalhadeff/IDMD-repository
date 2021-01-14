var rad = 25;
var x = rad;
var dir = 1;


function setup() {
  createCanvas(500, 500);
  background(120, 200, 255);
}

function draw() {
  background(120, 200, 255);
  noStroke();


  if (x > width - rad || x < rad) {

    var R = random(255);
    var G = random(255);
    var B = random(255);
    fill(R, G, B);
    dir = dir * -1;
  }
  ellipse(x, height / 2, rad * 2, rad * 2);
  x = x + dir;
}