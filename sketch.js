var runner1,runner1_running;
var runner2,runner2_running;
var path, pathImg;

function preload(){
  //pre-load images
  runner1_running = loadAnimation("Runner-1.png", "Runner-2.png");
 

  pathImg = loadImage("path.png")
}


function setup(){
  createCanvas(400,400);
  

  //create a ground sprite
  path = createSprite(200,180,400,20);
  path.addImage("ground" ,pathImg);
  path.y = path.height /2;
  path.velocityY = -4;

  //create sprites here
  runner1 = createSprite(200,350,20,50);
  runner1.addAnimation("running", runner1_running);
  runner1.scale = 0.05;

  




}

function draw() {
  background(0);

  if (path.y < 0) {
    path.y = path.height / 2;
   }

  drawSprites();
}
