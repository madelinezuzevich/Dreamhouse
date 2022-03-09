function setup() {
  createCanvas(400,400);
}

function draw() {
  background(0);
  strokeWeight(1)
  stroke('black')
  //The squares create the house and the windows, all of equal proportions to mimic a dollhouse. 
  square(90, 130, 230);
  square(100, 150, 60, 20);
    square(100, 250, 60, 20);
    square(250, 150, 60, 20);
  square(250, 250, 60, 20);
  //Second-floor window lines horizontal.
   line(100, 180, 160, 180);
   line(250, 180, 310, 180);
  //First-floor window lines horizontal. 
  line(100, 280, 160, 280);
   line(250, 280, 310, 280);
    //The roof is a triangle. I want to add tiles or texture in my next draft.
triangle(60,130, 205, 40,340, 130);
    //Second-floor window lines diagonal.
  line(130,150,130,210)
    line(280,150,280,210)
  //First-floor window lines diagonal.
  line(130,250,130,310)
    line(280,250,280,310)
     //The door to the house. Oddly enough, it doesn't hyperlink to any of the rooms. The user can only access the family by peeking into the windows.
rect(185, 270, 45, 90);
    strokeWeight(7)
  point(192, 315);
strokeWeight(1)
  line(0, 360, 400, 360);
  //Static gradiant, I want to make the sketch a bit uncanny by placing the home in a static space. This backdrop reminds me of the Twlight Zone. 
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
      //In my next draft, I want to add texture to the home and its surroundings. I will also add hyperlinks to the windows that lead into the four rooms.
    }
}
