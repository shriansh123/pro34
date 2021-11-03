
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var rope;
var ball;
var ball_con;
var button;
var brick1;
var brick2;
var brick3;
function setup() {
  createCanvas(400,400);
frameRate(80);
  Engine = Engine.create();
  world = engine.world;
  
   ground = new Ground(200,690,600,20);

   rope = new Rope(7,{x:245,y:30});

   ball = Bodies.circle(300,300,20);
   
  ball_con = new Link(rope,ball);

  brick1 = new Brick(200,750,20,10);

  brick2 = new Brick(210,700,20,10);

  brick3 = new Brick(190,700,20,10);

}


function draw() 
{
  background(51);

ground.show();
rope.show();
ellipse(ball.position.x,ball.position.y,15,15);
  Engine.update(Engine);
 

 button.position(20,30);
 button.size(50,50);
 button.mouseClicked(drop);

}

function drop()
{

  rope.break();
  ball_con.detach();
  ball_con = null; 
}