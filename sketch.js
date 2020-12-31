var box1,box2;

function setup() {
  createCanvas(displayWidth,displayHeight);
  box1 = createSprite(800, 300, 50, 50);
  box1.shapeColor="red";
  box2 = createSprite(300, 300, 50, 50);
  box2.shapeColor="red";
  box1.velocityX=-6
  box2.velocityX=6
}

function draw() {
  background(0);
  box2.x = mouseX;
  box2.y = mouseY;
  bounceOff(box1,box2);
  if(touch(box1,box2)){
    stroke("white");
    strokeWeight(2);
    textSize(20);
    text("hello",100,100);

  }
  else{
  box1.debug=false;
  box2.debug=false;
  }
  drawSprites();
}
