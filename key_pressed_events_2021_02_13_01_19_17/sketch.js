function setup() {
  createCanvas(500, 500);
  background(150);
  textSize(40);
  textAlign(CENTER);
  text("this is some text", width/2, height/2);
}
function draw() {
  if (keyIsPressed) {
    if (key === "g") {
      background(0, 255, 0);
      text("key pressed is " + key, width/2, height/2);
    } else if (key === "r") {
      background(255, 0, 0);
      text("key pressed is " + key, width/2, height/2);
    } else if (key === "b") {
      background(0, 0, 255)
      text("key pressed is " + key, width/2, height/2);
    } else {
      background(100);
      console.log("key typed is:" + key);
    }
  }
}
// function keyTyped() {
//   console.log("i typed:" + key);
// }
// function keyPressed() {
//   console.log("i typed:" + key);
// }



