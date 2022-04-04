function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(0);
  strokeWeight(1)
  stroke(255)
  //Static gradiant.
    for (var x = 0; x <= width; x++) {
      stroke(255);
      point(x, random(height));
      point(x, random(50));
      point(x, random(100));
      point(x, random(150));
      point(x, random(200));
      point(x, random(250));
      point(x, random(300));
      point(x, random(350));
      point(x, random(400));
      //Possibly include forest/floral background. 
    }
}
