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
var amordaminhavida=3;
var decadas=0;
var stats="gameplay";

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
if(stats==="gameplay"){
  if(amordaminhavida===3){
    amor.visible=false;
    amor1.visible=false;
    amor2.visible=true;
  }
  if(amordaminhavida===2){
    amor.visible=false;
    amor1.visible=true;
    amor2.visible=false;
  }
  if(amordaminhavida===1){
    amor.visible=true;
    amor1.visible=false;
    amor2.visible=false;
  }
  if(amordaminhavida===0){
    amor.visible=false;
    amor1.visible=false;
    amor2.visible=false;
  }
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
  joaovitor.shapeColor="FloralWhite";
}
if(keyWentUp("space")){
  joberto.changeAnimation("piscadelas");
}
if(best.isTouching(joberto)){
for(var jobertomorrelogo=0;jobertomorrelogo<best.length;jobertomorrelogo++){
  if(best[jobertomorrelogo].isTouching(joberto)){
    best[jobertomorrelogo].destroy();
    amordaminhavida-=1;

}
}
}
if(best.isTouching(picoledesangue1)){
for(var zombiemorrelogo=0;zombiemorrelogo<best.length;zombiemorrelogo++){
  if(best[zombiemorrelogo].isTouching(picoledesangue1)){
    best[zombiemorrelogo].destroy();
    picoledesangue1.destroyEach();
    decadas+=10;
}
}
}
zombiesmorte();
if(picoledesangue===0){
  stats="fracasso";
}
if(amordaminhavida===0){
  stats="badvibes";
}
if(decadas===1000){
  stats="winx";
}
}
fill("skyblue");
textSize(19);
text("repelentes restantes:"+picoledesangue,50,50);
text("alimentos adiquiridos:"+decadas,50,75)
if(stats==="fracasso"){
  textAlign(CENTER);
  stroke("Lavender");
  fill("FloralWhite");
  text("a missão fracassou, corra antes que você se torne um deles",450,350);
  best.destroyEach();
  joberto.destroy();
}
if(stats==="badvibes"){
  textAlign(CENTER);
  stroke("Lavender");
  fill("FloralWhite");
  text("você se tornou um deles, por isso terei que te matar, te vejo em outra vida",450,350);
  best.destroyEach();
  joberto.destroy();
  amor3.destroy();
}
if(stats==="winx"){
  textAlign(CENTER);
  stroke("Lavender");
  fill("FloralWhite");
  text("parabéns, você derrotou todos eles, agora teremos que reconstruir esse mundo",450,350);
  best.destroyEach();
  joberto.destroy();
}


drawSprites();
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