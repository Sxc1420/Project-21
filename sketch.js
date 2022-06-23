const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;
var bottomSide, leftSide, rightSide, ball;
var keyCode;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	bottomSide = new Ground(400,670,800,20);
	leftSide = new Ground(550,600,20,120);
	rightSide = new Ground(670,600,20,120);

	var ballOptions = {
	    isStatic: false,
	    restitution: 0.5,
		density: 1.2
	}

	//Create the Bodies Here.
    ball = Bodies.circle(100,70,5,ballOptions);
	World.add(world,ball);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  
  bottomSide.display();
  leftSide.display();
  rightSide.display();
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
        Matter.Body.applyForce(ball,ball.position,{x:3.05,y:-5});
	}
}
