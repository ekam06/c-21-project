var bullet,wall
var speed,weight
var thickness



function setup() {
  createCanvas(1600,400);

  speed=random(223,321)
  weight=random(30,52)

  
  bullet=createSprite(50,200,20,10)
  bullet.velocityX=speed
  bullet.shapeColor=("white")

  thickness=random(22,83)
  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor=(80,80,80)
 
  
}

function draw() {
  
  background("black"); 

  console.log(speed)

if(hasCollided(bullet,wall)){

var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)

bullet.velocityX=0

if(damage<10){

wall.shapeColor=("green")

}
if(damage>10){
  wall.shapeColor=("red")
}

}
  
  drawSprites();
}


function hasCollided(lbullet,lwall)
{

bulletRightEdge=lbullet.x+lbullet.width
wallLeftEdge=lwall.x
if(bulletRightEdge>=wallLeftEdge)
{
  return true
}
  return false;

}