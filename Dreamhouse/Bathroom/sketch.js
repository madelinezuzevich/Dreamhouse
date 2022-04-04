function setup() {
  createCanvas(900, 400);
}

function draw() {
  background(0);
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
      point(x, random(400));}
  //Hallway dimensions 
  line(0, 0, 100, 148);
   line(400, 0,290, 148);
   line(0, 400, 100, 300);
 line(600, 600, 305, 300);
  //Hallway back wall
 line(100, 148, 290, 148);
stroke(126);
line(100, 148, 100, 300);
stroke(255);
line(100, 300, 305, 300);

}
