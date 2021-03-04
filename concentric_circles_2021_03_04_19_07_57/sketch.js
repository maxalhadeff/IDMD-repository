
//Concentric circles
function setup() {
    createCanvas(400, 400);
    background(212);
    noFill();
  noLoop();
}
function draw() {
  let dia = width;
  while (dia > 0) {
    fill(random(255), random(255), random(255))
    ellipse(width / 2, height / 2, dia, dia);
    dia -= 10;
  }
}