var box1,box2;

function setup() {
  createCanvas(displayWidth,displayHeight);
  box1 = createSprite(300, 300, 50, 50);
  box1.shapeColor="red";
  box2 = createSprite(400, 400, 50, 50);
  box2.shapeColor="red";
}

function draw() {
  background(0);
  box2.x = mouseX;
  box2.y = mouseY;
  if (box2.x - box1.x <= box1.width/2 + box2.width/2 && box1.x - box2.x <= box1.width/2 + box2.width/2
    &&  box2.y - box1.y <= box1.height/2 + box2.height/2 && box1.y - box2.y <= box1.height/2 + box2.height/2) {
    box1.shapeColor="purple";
    box2.shapeColor="purple";
  } else {
    box1.shapeColor="red";
    box2.shapeColor="red";
  }
  drawSprites();
}