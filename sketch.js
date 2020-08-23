var monkey, monkeyImage, foodGroup, bananaImage, ground, obstacleImage, obstacleGroup, backGround, backGroundImage, score, stoneImage;

function preload(){

  backGroundImage=loadImage("jungle.png");
  
    monkeyImage=loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  
  
  bananaImage=loadImage("banana.png");
  
  stoneImage=loadImage("stone.png");
}

function setup(){
  createCanvas(400, 400);
  
  backGround=createSprite(0,250);
  backGround.addImage(backGroundImage);
  
  monkey=createSprite(100,340,20,50);
  monkey.addAnimation("monkeyrun",monkeyImage);
  monkey.scale=0.1;
  
  ground=createSprite(400,375,800,20);
  ground.visible=false;
  
  score=0;
  
  backGround.scale=2;
  backGround.x=backGround.width/2;
  backGround.velocityX=-4;
  bananaGroup=createGroup();
  obstaclesGroup=createGroup();
  
}

function draw(){
  background(220);
  
 if(backGround.x<0){
   backGround.x=backGround.width/2;
  } 

 if(keyWentDown("space")&&monkey.y>315){
   monkey.velocityY=-13;
  }
  
 if(monkey.isTouching(bananaGroup)){ 
   score=score+2;
   bananaGroup.destroyEach();
 }
  
 if(monkey.isTouching(obstaclesGroup)){ 
   score=score=0;
   obstaclesGroup.destroyEach();
   monkey.scale=0.1;
 }
  
  switch (score){
    case 10: monkey.scale=0.12;
            break;
    case 20: monkey.scale=0.14;
            break;
    case 30: monkey.scale=0.16;
            break;
    case 40: monkey.scale=0.18;
            break;
    default: break;
  }    
  
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  
  spawnFood();
  
  spawnObstacle();
  
  drawSprites();
}

function spawnFood(){
  if(frameCount%80==0){
    var banana=createSprite(400,300,10,10);
    banana.addImage(bananaImage);
    banana.scale=0.04;
    banana.y=random(240,310);
   
    banana.velocityX=-4;
   
    banana.lifetime=120;
   
    bananaGroup.add(banana);
  }  
}

function spawnObstacle(){
  if(frameCount% 300==0){
    var obstacles=createSprite(400,355,10,10);
    obstacles.addImage(stoneImage);
    obstacles.scale=0.1;
    
    obstacles.velocityX=-4;
    
    obstacles.lifetime=110;
    
    obstaclesGroup.add(obstacles);
  }
}
