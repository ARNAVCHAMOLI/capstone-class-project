const Engine = Matter.Engine;
const Body = Matter.Body;
const World = Matter.World;
const Bodies = Matter.Bodies;
var world;
var engine;
var Attach;
var Ball;
var point;
var Ground;









function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;
  var balloptions={
    restitution : 1,
    friction : 0.6,
    density : 0.8,
    isStatic : false
  }

  

  
  Ball = Matter.Bodies.circle(300,170,20,balloptions);
  World.add(world,Ball);

  Ground = new ground(400,350,800,50);
  World.add(world,Ball);


 
  
  //Attach = new Chain(Ball.body,{x:300 , y:0});
  

  


}

function draw() {
  background(255,255,255);  
  drawSprites();
  //Attach.show();
ellipse(Ball.position.x,Ball.position.y,40,40)
Ground.show();
}