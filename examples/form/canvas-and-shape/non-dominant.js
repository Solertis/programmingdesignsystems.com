function setup() {

  createCanvas(600, 400);

  background(230);

  // Base the size of the rectangle on the
  // height of the window.
  var rectSize = height * 0.1;

  // Find the x and y needed to put the
  // rectangle in the middle of the screen.
  var x = (width/2) - (rectSize/2);
  var y = (height/2) - (rectSize/2);

  // Draw the rectangle.
  noStroke();
  fill(30);
  rect(x, y, rectSize, rectSize);

  noLoop();
}
