//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var piso;

function setup() {
  createCanvas(400, 400);

  engine = Engine.create();
  world = engine.world;

  var piso_options = {
    isStatic: true,
  };

  piso = Bodies.rectangle(200, 390, 400, 20, piso_options);
  World.add(world, piso);

  console.log(piso);
}

function draw() {
  background("black");

  fill("green");
  rectMode(CENTER);
  rect(piso.position.x, piso.position.y, 400, 20);

  Engine.update(engine);
}
