//620 x 420
var x = 100;
var y = 75;
var babyyoda;
var babyyodaWidth = 620;
var aspectRatio = 420 / 620;
var r = 25;

function setup() {
  createCanvas(300, 200);
  background(120);
  textSize(r/4);
  textFont("Permanent Marker");
  textAlign(CENTER,CENTER);
}

function preload() {
  babyyoda = loadImage("baby-yoda.jpg");
}

function draw() {
  image(babyyoda, 0, 0, width, width * aspectRatio);
  //background(120);
  fill(0, 255, 0);
  ellipse(x, y, r * 2, r * 2);
  if (keyIsPressed) {
    if (keyCode == RIGHT_ARROW) {
      x = min(width - r, x + 10);
      if (x == width - r) {
        fill(255, 0, 0)
        text("HIT A WALL", x, y);
      }
    } else if (keyCode == LEFT_ARROW) {
      x = max(r, x - 10);
      if (x == r) {
        fill(255, 0, 0)
        text("HIT A WALL", x, y);
      }
    } else if (keyCode == UP_ARROW) {
      y = max(r, y - 10);
      if (y == r) {
        fill(255, 0, 0)
        text("HIT A WALL", x, y);
      }
    } else if (keyCode == DOWN_ARROW) {
      y = min(height - r, y + 10);
      if (y == height - r) {
        fill(255, 0, 0)
        text("HIT A WALL", x, y);
      }
    }
  }
}