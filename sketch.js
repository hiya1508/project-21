const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundobj ;
var leftSide ;

function setup() {
	createCanvas(1000,300);

	engine = Engine.create();
	world = engine.world;

  groundobj= new ground(width/2,670,width,20);
  leftSide= new ground(1100,600,30,120)
	//Create the Bodies Here.
 var ball_options = {
	 isStatic:false,
	 restitution:0.3,
	 friction:0,
	 density:1.2
}
 ball = Bodies.circle(200,100,20,ball_options);
 World.add(world,ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(51);

  ellipse(ball.position.x,ball.position.y,20);
  groundobj.display();
  screenLeft.display();
  drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW){
	  
  }

}



