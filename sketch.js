
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy, tree, stone;
var mango1, mango2, mango3, mango4, mango5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy = new Boy(width/2, length/2);
	tree = new Tree(width/2+200, langth/2+100);
	stone = new Stone(boy.body.position.x, boy.body.position.y);
	mango1 = new Mango(tree.body.position.x+20, tree.body.position.y+10, 0);
	mango2 = new Mango(tree.body.position.x+10, tree.body.position.y+20, 0);
	mango3 = new Mango(tree.body.position.x+30, tree.body.position.y+30, 0);
	mango4 = new Mango(tree.body.position.x+30, tree.body.position.y+20, 0);
	mango5 = new Mango(tree.body.position.x+10, tree.body.position.y+30, 0);

	Engine.run(engine);
	detectollision(stone, mango1);
	detectollision(stone, mango2);
	detectollision(stone, mango3);
	detectollision(stone, mango4);
	detectollision(stone, mango5);
}


function draw()
 {
	rectMode(CENTER);
	background(0);
    boy.display();
	tree.display();
	stone.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
}
function keyPressed()
{
	if(keyCode === 32)
	{
		Matter.body.setPosition(stone.body, {x:235, y:420})
		launchar.attach(stone.body)
	}
}
function detectollision(Lstone, Lmango)
{
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position
	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=lmango.r, lstone.r)
	{
		Matter.Body.setStatic(lmango.body, false);
	}
}


