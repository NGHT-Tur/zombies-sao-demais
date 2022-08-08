var fundo;
var zombies;
var zombie;
var joberto;
var joberto1;
var joberto2;
var best;
function preload(){
  fundo=loadImage("./assets/bg.jpeg");
  zombies=loadImage("./assets/zombie.png");
  joberto1=loadAnimation("./assets/shooter_1.png","./assets/shooter_2.png");
  joberto2=loadAnimation("./assets/shooter_3.png");
}

function setup() {
createCanvas(900,700);
joberto=createSprite(100,450);
joberto.addAnimation("piscadelas", joberto1);
joberto.scale= 0.35;
joberto.addAnimation("saladooitavo", joberto2);
best=new Group();
}

function draw() {
background(fundo);
      if (keyIsDown(UP_ARROW)) {
        joberto.y -= 10;
      }
  
      if (keyIsDown(DOWN_ARROW)) {
        joberto.y += 10;
      } 
  
      if (keyIsDown(LEFT_ARROW)) {
        joberto.x -= 5;
      }
  
      if (keyIsDown(RIGHT_ARROW)) {
        joberto.x += 5;
  }
 if(keyWentDown("space")){
    joberto.changeAnimation("saladooitavo");
 }
 if(keyWentUp("space")){
    joberto.changeAnimation("piscadelas");
 }
drawSprites();
zombiesmorte();
}

function zombiesmorte(){
if(frameCount%Math.round(random(50,80))===0){
zombie=createSprite(900,random(275,575));
zombie.addImage(zombies);
zombie.velocityX=-0.5;
zombie.scale=0.2;
zombie.lifeTime=1810;
best.add(zombie);
}

}