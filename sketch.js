var fundo;
var zombies;
var zombie;
var joberto;
var joberto1;
var joberto2;
var best;
var amor;
var amor1;
var amor2;
var amor3;
var amor4;
var amor5;
var picoledesangue=1000;
var picoledesangue1;
var joaovitor;
function preload(){
  fundo=loadImage("./assets/bg.jpeg");
  zombies=loadImage("./assets/zombie.png");
  joberto1=loadAnimation("./assets/shooter_1.png","./assets/shooter_2.png");
  joberto2=loadAnimation("./assets/shooter_3.png");
  amor3=loadImage("./assets/heart_1.png");
  amor4=loadImage("./assets/heart_2.png");
  amor5=loadImage("./assets/heart_3.png");
}

function setup() {
createCanvas(900,700);
joberto=createSprite(100,450);
joberto.addAnimation("piscadelas", joberto1);
joberto.scale= 0.35;
joberto.addAnimation("saladooitavo", joberto2);
best=new Group();
amor=createSprite(735,100);
amor1=createSprite(767,100);
amor2=createSprite(800,100);
amor.addImage(amor3);
amor1.addImage(amor4);
amor2.addImage(amor5);
amor.scale=0.3;
amor1.scale=0.3;
amor2.scale=0.3;
amor.visible=false;
amor1.visible=false;
picoledesangue1=new Group();
}

function draw() {
background(fundo);
fill("skyblue");
textSize(19);
text("repelentes restantes:"+picoledesangue,50,50);

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
    joaovitor=createSprite(joberto.x,joberto.y-29,10,5);
    joaovitor.velocityX=20;
    picoledesangue1.add(joaovitor);
    picoledesangue-=1;
 }
 if(keyWentUp("space")){
    joberto.changeAnimation("piscadelas");
 }
 if(best.isTouching(joberto)){
  for(var jobertomorrelogo=0;jobertomorrelogo<best.length;jobertomorrelogo++){
    if(best[jobertomorrelogo].isTouching(joberto)){
      best[jobertomorrelogo].destroy();
  }
 }
}
if(best.isTouching(picoledesangue1)){
  for(var zombiemorrelogo=0;zombiemorrelogo<best.length;zombiemorrelogo++){
    if(best[zombiemorrelogo].isTouching(picoledesangue1)){
      best[zombiemorrelogo].destroy();
      picoledesangue1.destroyEach();
  }
 }
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
zombie.debug=true;
zombie.setCollider("rectangle",0,0,100,900);
}


}