const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var object_2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;


    var object_option_2 =   {
        restitution: 1.00
    }

    object_2 = Bodies.circle(200,100,30,object_option_2);
    World.add(world,object_2);
    

    var object_options ={
        isStatic: true
    }

   ground= Bodies.rectangle(200,390,400,20,object_options);
    World.add(world,ground);

   

console.log(object_2);
    console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS);
    ellipse(object_2.position.x,object_2.position.y,50,50);
}
