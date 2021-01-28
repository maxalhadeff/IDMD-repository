var r, g, b;

function setup() {
  createCanvas(500, 500);
  background(255, 0, 0);
}

function draw() {
   fill(r,g,b);
   ellipse(mouseX, mouseY, 25, 25); 
 
}
function mousePressed(){
  print("mousePressed");
  r = random(255);
  g = random(255);
  b = random(255);
}