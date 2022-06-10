
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground1,Lside,rside;
var engine
var world
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
    rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ball_options={
		isStatic : false,
		restitution : 0.3,
		friction : 0,
		density :1.2
	}
    ball = Bodies.circle(260,100,20,ball_options)
	World.add(world,ball);
	

	ground1 = new ground(width/2,670,width,20)
	Lside = new ground(1100,600,20,120);
	rside = new ground(1350,600,20,120)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,40,40)
  ground1.display()
  rside.display()
  Lside.display()
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,ball.position,{x : 85, y : -85})
	}
}



