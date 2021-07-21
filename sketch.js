var hanuman , hanumanImage , weapon , weaponImage , scene , backgroundImage ;
var enemy1 , enemy2 , enemy3 , enemy1Img , enemy2Img , enemy3Img ;
var enemy1Group , enemy2Group , enemy3Group ;
var design , dImage ;
var Score=0;

function preload(){
  
  backgroundImage = loadImage("cloud.jpg");
  hanumanImage = loadImage("hanumaan.png")
  weaponImage = loadImage("weapon.png");
  enemy1Img = loadImage("enemy1.png");
  enemy2Img = loadImage("enemy2.png");
  enemy3Img = loadImage("enemy3.png");
  dImage = loadImage("design.png");
  
}



function setup() {
  createCanvas(600,600);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  //create hanuman
  hanuman=createSprite(550,500,20,20);
  hanuman.addImage(hanumanImage);
  hanuman.scale=0.3;
  
  //creating design sprite
  design = createSprite(550,200,30,30);
  design.addImage(dImage);
  design.scale=0.8;
  
  


    //create groups 
    enemy1Group = new Group();
    enemy2Group = new Group();
    enemy3Group = new Group();
    weaponGroup = new Group();
    designGroup = new Group();
}

function draw() {
 background(0);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }

    //moving design with hanuman
    design.y=hanuman.y;
  
  //moving bow
  hanuman.y = World.mouseY;

  //if statement for weapon to come
if(keyDown("space")){
  createWeapon();
}

if(enemy1Group.isTouching(weaponGroup))
{
  enemy1Group.destroyEach();
  weaponGroup.destroyEach();
  Score=Score+1;
  
  //wrting text
  textSize(50);
  text("+1",250,250);
}

if(enemy2Group.isTouching(weaponGroup))
{
  enemy2Group.destroyEach();
  weaponGroup.destroyEach();
  Score=Score+2;

  //wrting text
  textSize(50);
  text("+2",250,250);
}

if(enemy3Group.isTouching(weaponGroup))
{
  enemy3Group.destroyEach();
  weaponGroup.destroyEach();
  Score=Score+3;

  //wrting text
  textSize(50);
  text("+3",250,250);
}


//frame count

if (World.frameCount % 50 === 0) { 
  createEnemy1(); 
}
if (World.frameCount % 180 === 0) { 
  createEnemy2(); 
}
if (World.frameCount % 200 === 0) { 
  createEnemy3(); 
}
  //increase hanuman and weapon depth
  hanuman.depth+=2;
  

  drawSprites();
  
  //text press space bar
  textSize(30);
  fill("yellow");
  text("press space bar",150,30);

  //score text
  textSize(30);
  fill("blue");
  text("Score: "+Score,400,30);
  
}


//create function createWeapon
function createWeapon(){
  weapon = createSprite(530,220,20,50);
  weapon.addImage(weaponImage); 
  weapon.scale = 0.2;
  weapon.rotation=85;
  weapon.y=hanuman.y;
  weapon.velocityX = -5;
  weapon.lifeTime = 200;
  
  //adding weapon
  weaponGroup.add(weapon);

}

function createEnemy1() {
  var ene1 = createSprite(0,Math.round(random(20, 600)), 10, 10);
  ene1.addImage(enemy1Img);
  ene1.velocityX = 2;
  ene1.lifetime = 280;
  ene1.scale = 0.2;

  //adding enemy1 inside enemy1Group
  enemy1Group.add(ene1);

}

function createEnemy2() {
  var ene2 = createSprite(0,Math.round(random(20, 600)), 10, 10);
  ene2.addImage(enemy2Img);
  ene2.velocityX = 2;
  ene2.lifetime = 280;
  ene2.scale = 0.2;

  //adding enemy2 inside enemy2Group
  enemy2Group.add(ene2);

}

function createEnemy3() {
  var ene3 = createSprite(0,Math.round(random(20, 600)), 10, 10);
  ene3.addImage(enemy3Img);
  ene3.velocityX = 2;
  ene3.lifetime = 280;
  ene3.scale = 0.2;

//adding enemy3 inside enemy3Group
  enemy3Group.add(ene3);

}