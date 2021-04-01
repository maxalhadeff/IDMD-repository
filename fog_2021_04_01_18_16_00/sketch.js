let xoff = 100;
let yoff = 300;
let inc = 0.01;
let start = 0

function setup() {
  createCanvas(600, 400);
  pixelDensity(1);
  frameRate(10);
}

function draw() {
  loadPixels();
  yoff = 0;
  for (let y = 0; y < height; y++) {
    xoff = start;
    for (let x = 0; x < width; x++) {
      let index = (y * width + x) * 4;
      let r = noise(xoff, yoff) * 255;
      pixels[index] = r;
      pixels[index + 1] = r+69;
      pixels[index + 2] = r+100;
      pixels[index + 3] = 255;
      xoff += inc;
    }
    yoff += inc;
  }
  start += inc;
  updatePixels();
  //noLoop();
}