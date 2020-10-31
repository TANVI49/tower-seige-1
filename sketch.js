const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
 var canvas = createCanvas(900,700);

  engine = Engine.create();
  world = engine.world;

  ground=new ground(350, 650, 300, 50);
//layer1 p1
  b1=createSprite(200, 620, 50, 60);
  fill("brown");
  b2=createSprite(260, 620, 50,60);
  fill("red");
  b3=createSprite(320, 620, 50, 60);
  fill("brown");
  b4=createSprite(380, 620, 50, 60);
  fill("red");
  b5=createSprite(440, 620, 50, 60);
  fill("brown");
  b6=createSprite(500, 620, 50, 60);
  fill("red");
 //layer2 p1
  b1=createSprite(230, 560, 50, 60);
  b2=createSprite(290, 560, 50, 60);
  b3=createSprite(350, 560, 50, 60);
  b4=createSprite(410, 560, 50, 60);
  b5=createSprite(470, 560, 50, 60);
  //layer3 p1
  b1=createSprite(260, 500, 50, 60);
  b2=createSprite(320, 500, 50, 60);
  b3=createSprite(380, 500, 50, 60);
  b4=createSprite(440, 500, 50, 60);
  //layer4 p1
  b1=createSprite(290, 440, 50, 60);
  b2=createSprite(350, 440, 50, 60);
  b3=createSprite(410, 440, 50, 60);
  //layer5 p1
  b1=createSprite(320, 380, 50, 60);
  b2=createSprite(380, 380, 50, 60);
 //layer6 p1
  b1=createSprite(350, 320, 50, 60);
}

function draw() {
  background(222,233,120);
  Engine.update(engine);
  polygon=Bodies.circle(50,200,330,50);
  World.add(world,polygon); 
 
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){

  if(keyCode===32){
   slingShot.attach(polygon.body);
  }}