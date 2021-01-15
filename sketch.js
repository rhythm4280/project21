var canvas,surface1,surface2,surface3,surface4,box;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(600,600);
surface1=createSprite(560,580,150,20)
surface1.shapeColor="green";
    //create 4 different surfaces
surface2=createSprite(380,580,150,20);
surface2.shapeColor="blue";

surface3=createSprite(200,580,150,20);
surface3.shapeColor="red";
    //create box sprite and give velocity
surface4=createSprite(20,580,150,20);
surface4.shapeColor="orange";

box=createSprite(random(20,750));
box.shapeColor="white";
box.velocityX=5;
box.velocityY=8;

}

function draw() {
   background(rgb(169,169,169));

  if(box.isTouching(surface1)&& box.bounceOff(surface1)){
      box.shapeColor="green";
      
  }
  if(box.isTouching(surface2)&&box.bounceOff(surface2)){
    box.shapeColor="blue";
    
}
if(box.isTouching(surface3)&&box.bounceOff(surface3)){
    box.shapeColor="red";
    
}
if(box.isTouching(surface4)&&box.bounceOff(surface4)){
    box.shapeColor="orange";
    
}
    //create edgeSprite
drawSprites();


    //add condition to check if box touching surface and make it box
}
