var spaceShipbg,issImg,spaceC1,spaceC2,spaceC3,spaceC4;
var iss , spaceCraft,spaceCraft1spaceCraft2,spaceCraft3,spaceCraft4;
var hasDocked = false;


function preload(){
spaceShipbg = loadImage("spacebg.jpg");
spaceCraft1 = loadImage("spaceCraft1.png");
spaceCraft2 = loadImage("spaceCraft2.png")
spaceCraft3 = loadImage("spaceCraft3.png")
spaceCraft4 = loadImage("spaceCraft4.png")
issImg = loadImage("iss.png");

}

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  iss = createSprite(330,130);
  iss.addImage(issImg);

  iss.scale = 0.70

  spaceCraft = createSprite(285,240);
  spaceCraft.addImage(spaceCraft1)
 spaceCraft.scale = 0.20; 
   
}

function draw() {
  background(spaceShipbg);  
  
  if(!hasDocked){
spaceCraft.x = spaceCraft.x + random(-1,1);
     
    if(keyDown("UP_ARROW")){
     spaceCraft.y = spaceCraft.y -2;
    }
     if(keyDown("DOWN_ARROW")){
       spaceCraft.y = spaceCraft.y+2
       spaceCraft.addImage(spaceCraft1);
     }
      if(keyDown("RIGHT_ARROW")){
        spaceCraft.x = spaceCraft.x +2;
        spaceCraft.addImage(spaceCraft2);
      }
      if(keyDown("LEFT_ARROW")){
        spaceCraft.x = spaceCraft.x -2;
        spaceCraft.addImage(spaceCraft3);
      }
  }


   if(spaceCraft.y <= (iss.y+70) && spaceCraft.x <= (iss.x-10)){
     hasDocked = true;
     textSize(25); fill("white")
      text("Docking Successful!", 200, 300); 

   }
    
  drawSprites();
 
}