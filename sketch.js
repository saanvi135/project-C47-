var canvas
var background
var form
var player 
var playerCount

function preload(){
  bike1_Img=loadImage("./bike4.png")
  bike2_Img=loadImage("./bike4.png")
  track = loadImage=("/track.jpg");
  fuelImage = loadImage("./fuel.png");
  powerCoinImage = loadImage("./goldCoin.png");
  obstacle1Image = loadImage("./obstacle1.png");
  obstacle2Image = loadImage("./obstacle2.png");
  lifeImage = loadImage("./life.png");
}

function setup(){
canvas=createCanvas(windowWidth,windowHeight)
game=new Game()
game.start()
}

function draw(){
  background("white")
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}
function windowResize(){
  resizeCanvas(windowWidth,windowHeight)
  
}