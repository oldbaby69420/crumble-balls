
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

	//Create the Bodies Here.


	Engine.run(engine);
ground1= new ground(400,600,800,20)
  paper1= new paper(200,50,25,25)
  trash1= new trash(500,550,20,100)
  trash2=new trash(600,550,20, 100)
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper1.display()
 ground1.display()
 trash1.display()
 trash2.display()

}
function keyPressed(){
	if(keyCode==32){
		Matter.Body.applyForce(paper1.body, paper1.body.position, {x: 130 , y: -90  })
	}
}


