var rider, riderImage;
var happyRider;
var road;
var slantingroad;
var restart;
var uphill  = 0;


function preload(){
  riderImage = loadImage("Rider1.png");
  rider45Image = loadImage("rider-45.png");
}

function setup(){
  var canvas = createCanvas(1500,700);
  rider = createSprite(150,392);
  rider.addImage("rider",riderImage);
  rider.addImage("rider45",rider45Image);
  rider.velocityX = 0;
  rider.scale = 0.5;

  road = createSprite(650,490,1200,10);
  road.shapeColor = "black";

  slantingroad = createSprite(1250,490,10,10);
  slantingroad.visible = false;
}


function draw(){

  background("green");

  camera.position.x = rider.x;
  camera.position.y = rider.y;

  rider.velocityX = 0;

  fill("black");
  strokeWeight(10);

  line(1250,490,1600,190);
   straightRoad = line2(1600,190,3000,190);

  if(keyDown("RIGHT_ARROW")){
    rider.velocityX = 4;
  }

  if(rider.isTouching(slantingroad)&& uphill===0){
    uphill = 1;
    traveluphill();
  }  

  if(rider.isTouching(line2)){
    rider.changeImage("riderImage",rider1.png);
  }

  drawSprites();
}

function traveluphill(){
  if(uphill===1){
  if(keyDown("RIGHT_ARROW")){
    rider.velocityX = 6;
  }
  rider.x = 1240;
  rider.velocityY = -3.5;
  rider.changeImage("rider45",rider45Image);
  rider.y = 415;
  rider.scale = 0.9;
  console.log(rider);
  //uphill = 0;
}
}