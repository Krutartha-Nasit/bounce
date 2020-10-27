 const Engine= Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;

var engine, world;
var ground;
var ball;
function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

  var options={
    isStatic: true
  }
  ground=Bodies.rectangle(200,380,400,50,options);
  World.add(world,ground);
  
  var balloptions={
    restitution:1.0
  }
  ball=Bodies.circle(100,100,50,balloptions);
  World.add(world,ball);

}

function draw() {
  background(100,200,10);  
  
Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,40);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,50);
  
}