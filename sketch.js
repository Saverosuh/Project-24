
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1, ground;

var boxp1,boxp2,boxp3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

  boxp1=createSprite(620,580,10,100)
	boxp1.shapeColor=color("red")

  boxp2=createSprite(750,580,10,100)
	boxp2.shapeColor=color("red")
  
  boxp3=createSprite(685,630,100,10)
	boxp3.shapeColor=color("red")

	engine = Engine.create();
	world = engine.world;

  paper1 = new Paper(80,450,20)
  ground = new Ground(400,650,800,10)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  drawSprites();
  paper1.display();
  ground.display();
}

function keyPressed(){
 if(keyCode === UP_ARROW){
  
  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});

  }
}


