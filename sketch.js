const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var enemy_img,background_img,lep1_img;
var platform;
var Running;
var backgroundSprite;

function preload(){
 enemy_img = loadImage("images/enemy.png");
 background_img = loadImage("images/bg.png");
 lep1_img = loadAnimation("images/standing.png");
 Running = loadAnimation("Running/lep_0.png","Running/lep_1.png","Running/lep_3.png");

}

function setup(){
  //Creating Canvas....
  var canvas = createCanvas(displayWidth*5,displayHeight-130);
    engine = Engine.create();
    world = engine.world;
  //Creating Background Sprite....
  backgroundSprite = createSprite(1000,300,1300,600);
  backgroundSprite.addImage(background_img);
  backgroundSprite.scale =1.8;
  //Creating Second Background Sprite...
  BgSprite2 = createSprite(6000,300,1300,600);
  BgSprite2.addImage(background_img)
  BgSprite2.scale = 1.8;
  //Creating Invisibleground....
  invisibleGround = createSprite(width/2,530,width,20);
  invisibleGround.visible = false;
  
  //creating lep....
  lep = createSprite(100,500,50,50);
  lep.addAnimation("lep1",lep1_img); 
  lep.addAnimation("Running",Running);
  lep.velocityY = 1;
  lep.scale = 1.5;      

  Lep1 = new Lep(250,250);
                          

}
function draw(){
    background(0);
    Engine.update(engine);;

     if(keyCode === 32 && lep.collide(invisibleGround)){
       lep.velocityY = -10;
     }
     lep.velocityY = lep.velocityY+2.5;
     if(keyWentDown(RIGHT_ARROW)){
        lep.x = lep.x+50;
        lep.changeAnimation("Running",Running);
     }
     lep.collide(invisibleGround); 
     Lep1.display();
    drawSprites();

}