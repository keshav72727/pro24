
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground1;
var box1,box2,box3;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(800,680,1600,20);

	box1 = new Box(1240,660,300,20);
	box2=new Box(1100,620,20,100);
	box3=new Box(1400,620,20,100);

	paper=new PaperBall(220,450,40);

	Engine.run(engine);
  
}


function draw() {
	
	Engine.update(engine);
  
	rectMode(CENTER);
  background(0);
  
 
 
    ground1.display();
  
	box1.display();
	box2.display();
	box3.display();

	paper.display();

	keyPressed();

	drawSprites();
 
}

function keyPressed(){
	if (keyCode=== UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	  }
}