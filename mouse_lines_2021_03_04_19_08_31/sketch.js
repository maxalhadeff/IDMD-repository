//Mouse Lines
  function setup() {
      createCanvas(400, 400);
      strokeWeight(4);
  }
  function draw() {
      background(204);
      for(let i = 10; i < mouseX; i = i + 8){
          line(i, 0, i, height-10);  
      }
      for(let j = 10; j < mouseY; j = j + 8) {
        line(0, j, mouseX , j);
      }
  }
