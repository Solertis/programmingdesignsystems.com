function setup()
{
  createCanvas(500, 655);
}

function draw() {

  frameRate(0.5);
  background(255);

  var numCols = Math.round(random(3, 6));
  var numRows = Math.round(random(5, 8));
  var pageMargin = Math.round(random(width * 0.001, width * 0.02));
  var spacingX = (width - (2*pageMargin)) / numCols;
  var spacingY = (height - (2*pageMargin)) / numRows;
  var shapeSize = random(spacingX * 0.4, spacingX * 0.7);
  var textIndex = Math.round(random(numCols * numRows));
  var redHeartIndex = Math.round(random(numCols * numRows));

  translate(pageMargin + (spacingX/2), pageMargin + (spacingY/2));

  var count = 0;

  for(var x = 0; x < numCols; x++)
  {
    for(var y = 0; y < numRows; y++)
    {
      if(count == textIndex)            drawText(x * spacingX, y * spacingY, shapeSize);
      else if(count == redHeartIndex)   drawHeart(x * spacingX, y * spacingY, shapeSize, "#d03d29");
      else                              drawHeart(x * spacingX, y * spacingY, shapeSize, "#448738");
      count++;
    }
  }
}

function drawHeart(x, y, d, c)
{
  push();
  translate(x, y);

  var r = d/2;

  noStroke();
  fill(c);
  beginShape();
    vertex(0, -r*0.4);
    bezierVertex(r * 0.2, -r * 0.9, r * 0.7, -r * 0.8, r*0.9, -r*0.45);
    bezierVertex(r * 1.1, -r * 0.1, r, r * 0.2, r*0.60, r*0.45);
    bezierVertex(r * 0.5, r * 0.5, r * 0.1, r * 0.6, 0, r);
    bezierVertex(-r * 0.1, r * 0.6, -r * 0.5, r * 0.5, -r*0.60, r*0.45);
    bezierVertex(-r, r * 0.2, -r * 1.1, -r * 0.1, -r*0.9, -r*0.45);
    bezierVertex(-r * 0.7, -r * 0.8, -r * 0.2, -r * 0.9, 0, -r*0.4);
  endShape();

  pop();
}

function drawText(x, y, d)
{
  textFont("Helvetica");
  textStyle(ITALIC);
  textSize(d * 0.3);
  fill("#448738");
  push();
  translate(x, y);
  text("Earth", -d * 0.4, -d * 0.15);
  text("Day...", -d * 0.6, d * 0.15);
  text("'95", d * 0.1, d * 0.45);
  pop();
}
