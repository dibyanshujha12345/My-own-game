const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
const Constraint = Matter.Constraint;
var enemy;
var rock;
let engine, world;
var aeroplane;
var aeroImg, skyImg;
var space;
var g1, g2;
var bridge;
var join;
var btn;
var rocket;
var rocketImg, no;
var enemy7,enemy6;
var up;
var down;
var left,right;
var score = 0;
function preload() {
  aeroImg = loadImage("./assets/Aeroplane.png");
  skyImg = loadImage("./assets/SKYi.png");
  rocketImg = loadImage("./assets/rocket.png");
}

function setup() {
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    canW = displayWidth;
    canH = displayHeight;
    createCanvas(displayWidth + 80, displayHeight);
  } else {
    canW = windowWidth;
    canH = windowHeight;
    createCanvas(windowWidth, windowHeight);
  }

  engine = Engine.create();
  world = engine.world;

  var rokOpt = {
    restitution: 0.99,
    isStatic: true,
  };

  aeroplane = Bodies.rectangle(100, 100, 200, 200, rokOpt);
  World.add(world, aeroplane);

  var options = {
    isStatic: true,
  };
  g1 = Bodies.rectangle(0, 0, width, 200, options);
  World.add(world, g1);
  g2 = Bodies.rectangle(0, height - 12, width, 10, options);
  World.add(world, g2);

  bridge = new Bridge(16, { x: width / 3-20, y: 0 });

  btn = createImg("./assets/cut_btn.png");
  btn.position(width / 3 - 20, 10);
  btn.size(60, 60);
  btn.mouseClicked(create);

  up = createImg("./assets/up.png");
  up.position(width-1000,10);
  up.size(60,60);
  up.mouseClicked(upF);

  down = createImg("./assets/down2.png");
  down.position(width-1000,70);
  down.size(60,60);
  down.mouseClicked(downF);

  left = createImg("./assets/left.png");
  left.position(width-1060,50);
  left.size(60,60);
  left.mouseClicked(leftF);

  right = createImg("./assets/right.png");
  right.position(width-940,50);
  right.size(60,60);
  right.mouseClicked(rightF);

  enemy = Bodies.rectangle(
    random(width - 500, width - 100),
    random(150, height - 150),
    200,
    200
  );
  World.add(world, enemy);

  enemy2 = Bodies.rectangle(
    random(width - 500, width - 100),
    random(150, height - 150),
    200,
    200
  );
  World.add(world, enemy2);

  enemy3 = Bodies.rectangle(
    random(width - 500, width - 100),
    random(150, height - 150),
    200,
    200
  );
  World.add(world, enemy3);

  enemy4 = Bodies.rectangle(
    random(width - 500, width - 100),
    random(150, height - 150),
    200,
    200
  );
  World.add(world, enemy4);

  enemy5 = Bodies.rectangle(
    random(width - 500, width - 100),
    random(150, height - 150),
    200,
    200
  );

  World.add(world, enemy5);

  enemy6 = Bodies.rectangle(
    random(width - 500, width - 100),
    random(150, height - 150),
    200,
    200
  );
  World.add(world, enemy6);
  enemy7 = Bodies.rectangle(
    random(width - 500, width - 200),
    random(150, height - 150),
    200,
    200
  );
  World.add(world, enemy7);
}

function draw() {
  background(51);

  
  Matter.Body.setVelocity(enemy,  { x: -7, y: 0 });
  Matter.Body.setVelocity(enemy2, { x: 7, y: 0 });
  Matter.Body.setVelocity(enemy3, { x: -7, y: 0 });
  Matter.Body.setVelocity(enemy4, { x: -7, y: 0 });
  Matter.Body.setVelocity(enemy5, { x: -7, y: 0 });
  Matter.Body.setVelocity(enemy6, { x: -7, y: 0 });
  Matter.Body.setVelocity(enemy7, { x: -7, y: 0 });
  

  if (enemy.position.x < 100) {
    enemy.position.x = width + 300;
    score =score+5;
  }
  if (enemy2.position.x < 100) {
    enemy2.position.x = width + 300;
    score =score+5;
  }
  if (enemy3.position.x < 100) {
    enemy3.position.x = width + 300;
    score =score+5;
  }
  if (enemy4.position.x < 100) {
    enemy4.position.x = width + 300;
    score =score+5;
  }
  if (enemy5.position.x < 100) {
    enemy5.position.x = width + 300;
    score =score+5;
  }

  if (enemy6.position.x < 100) {
    enemy6.position.x = width + 300;
    score =score+5;
  }
  if (enemy7.position.x < 100) {
    enemy7.position.x = width + 300;
    score =score+5;
  }

  if(enemy.position.y>height){
    enemy.position.y = random(height-50,50);
  }
  if(enemy2.position.y>height){
    enemy2.position.y = random(height-50,50);
  }
  if(enemy3.position.y>height){
    enemy3.position.y = random(height-50,50);
  }
  if(enemy4.position.y>height){
    enemy4.position.y = random(height-50,50);
  }
  if(enemy5.position.y>height){
    enemy5.position.y = random(height-50,50);
  }
  if(enemy6.position.y>height){
    enemy6.position.y = random(height-50,50);
  }
  if(enemy7.position.y>height){
    enemy7.position.y = random(height-50,50);
  }

  image(skyImg, 0, 0, width, height);
  imageMode(CENTER);

  image(aeroImg, aeroplane.position.x, aeroplane.position.y, 200, 200);
  image(rocketImg, enemy.position.x, enemy.position.y, 200, 200);
  image(rocketImg, enemy2.position.x, enemy2.position.y, 200, 200);
  image(rocketImg, enemy3.position.x, enemy3.position.y, 200, 200);
  image(rocketImg, enemy4.position.x, enemy4.position.y, 200, 200);
  image(rocketImg, enemy5.position.x, enemy5.position.y, 200, 200);
  image(rocketImg, enemy7.position.x, enemy7.position.y, 200, 200);
  image(rocketImg, enemy7.position.x, enemy7.position.y, 200, 200);
  Engine.update(engine);

  rect(g1.position.x, g1.position.y, width, 10);
  rect(g2.position.x, g2.position.y, width, 10);

  bridge.show();

  

  drawSprites();

  destroy();

  textSize(20);
  fill("red");
  text("SCORE:"+score,1000,100);
  text("Press the cut Button to start the game and control the aeroplane from enemies,Save urSelf from Rockets ",300,150);
}

function create() {
  bridge.break();
  Matter.Body.setStatic(aeroplane,false);
 
}
function upF(){
  
    aeroplane.position.y = aeroplane.position.y-5;
  }
  function downF(){
    aeroplane.position.y = aeroplane.position.y+5;
  }

function rightF(){
  aeroplane.position.x = aeroplane.position.x+5; 
}  
function leftF(){
  aeroplane.position.x = aeroplane.position.x-5;
}

function destroy(){
  var d1 = dist(aeroplane.position.x,aeroplane.position.y,enemy.position.x,enemy.position.y);
  var d2 =dist(aeroplane.position.x,aeroplane.position.y,enemy2.position.x,enemy2.position.y);
  var d3 = dist(aeroplane.position.x,aeroplane.position.y,enemy3.position.x,enemy3.position.y);
  var d4 = dist(aeroplane.position.x,aeroplane.position.y,enemy4.position.x,enemy4.position.y);
  var d5=dist(aeroplane.position.x,aeroplane.position.y,enemy5.position.x,enemy5.position.y);
  var d6 = dist(aeroplane.position.x,aeroplane.position.y,enemy6.position.x,enemy6.position.y);
  var d7 = dist(aeroplane.position.x,aeroplane.position.y,enemy7.position.x,enemy7.position.y);

  if(d1<70||d2<70||d3<70||d4<70||d5<70||d6<70||d7<70){
    textSize(20);
    fill("red"); 
    text("Game Over",width/2,height/2);
    aeroplane = null;
    enemy7=null;
    enemy6=null;
    enemy5=null;
    enemy4=null;
    enemy3=null;
    enemy2=null;
    enemy=null;
  }
}
