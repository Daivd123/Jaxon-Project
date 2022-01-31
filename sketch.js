var path, boy, leftBoundary, rightBoundary;
var pathImg, boyImg;
var i;

function preload() {

  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}
 
function setup () {
  createCanvas (400,400);

  path = createSprite (200, 200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

boy = createSprite
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg); 

leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;

rightBoundary=createSprite(41410,0,100,800)
rightBoundary.visible = false;
}

function draw () {
  background("lightgreen");
  path.velocityY = 4;

boy.x = world.MouseX;

edges = createEdgeSprites();
boy.collide(edges[3]);
boy.collide(leftBoundary)
boy.collide(rightBroundary);

if(path.y > 400){
path.y = height/2;
}

drawSprites();

}