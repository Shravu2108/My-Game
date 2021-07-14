var bg, fish, bread, bg_Img, fish_Img, bread_Img;
var spawnBread;
var score = 0;

function preload() {
  bg = loadImage("bg.png");
  bread = loadImage("bread.png");
  fish = loadImage("fish.png");
}

function setup() {
  createCanvas(400, 400);
  
  fish = createSprite(190,340);
  fish.scale = 0.3;
  
}

function draw() {
  background(bg_Img);
  
  fill("yellow");
  textFont("Algerian");
  text("SCORE:", 30, 20);
  textSize(40);
  
  if (keyDown("DOWN_ARROW")) {
    fish.velocityX = 0;
    fish.velocityY = 2;
  }
  if (keyDown("UP_ARROW")) {
    fish.velocityX = 0;
    fish.velocityY = -2;
  }
  if (keyDown("LEFT_ARROW")) {
    fish.velocityX = -2;
    fish.velocityY = 0;
  }
  if (keyDown("RIGHT_ARROW")) {
    fish.velocityX = 2;
    fish.velocityY = 0;
  }
  if (fish.isTouching(spawnBread)) {
    score = score+2;
  }
  if (spawnBread>400) {
    reset();
  }

  spawnBread();
  drawSprites();
}
function spawnBread() {
  if (frameCount % 40 === 0) {
    var bread = createSprite(200, 200);
    bread.x = Math.round(random(20,480));
    bread.y = Math.round(random(0,0));
    bread.setAnimation("bread");
    bread.scale = 0.1;
    bread.velocityY = 3;
  }

  
  drawSprites();
  
}

function reset(){

  bread.velocityY = 0;
  bread.velocityX = 0;
  bread.hide();
  fish.hide();
  
  text("OOps! You Lose", 200,200);
  fill("Blue");
  strokeWeight(4);
  strokeColor("Black");
  textFont("Algerian");
  textSize(45);

}