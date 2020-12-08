
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	pBob = new bob(200,600,40);
	pBob1 = new bob(240,600,40);
	pBob2 = new bob(280,600,40);
	pBob3 = new bob(320,600,40);
  pBob4 = new bob(360,600,40);
  pBob5 = new bob(400,600,40);

  roof1 = new roof(300,300,200,20);

  rope1 = new rope(pBob,roof1,20,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  pBob.display();
  pBob1.display();
  pBob2.display();
  pBob3.display();
  pBob4.display();
  pBob5.display();
  roof1.display();
  rope1.display();
  drawSprites();
 
}



