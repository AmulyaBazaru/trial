var fixedObj1 , fixedObj2 , fixedObj3 , fixedObj4;
var movingObj;
var music;


function preload(){
  
    music = loadSound("music.mp3");

}


function setup(){
    createCanvas(800,600);

    movingObj = createSprite(random(10,750),300,20,20);
    movingObj.shapeColor = "white";
    movingObj.velocityX = 3;
    movingObj.velocityY = 3;

    fixedObj1 = createSprite(100.590,180,20);
    fixedObj1.shapeColor = "red";
    
    fixedObj2 = createSprite(300.590,180,20);
    fixedObj2.shapeColor = "green";

    fixedObj3 = createSprite(500.590,180,20);
    fixedObj3.shapeColor = "blue";

    fixedObj4 = createSprite(700.590,180,20);
    fixedObj4.shapeColor = "yellow";

}

function draw() {
    background(rgb(169,169,169));
   
   if(movingObj.x < 0) {
    music.stop()
    movingObj.velocityX = 3;
   } 
   
   else if(movingObj.x > 800) {
       music.stop()
       movingObj.velocityX = -3;
   
    }


    if(isTouching(movingObj , fixedObj4)){
        music.play()
        movingObj.shapeColor = "yellow" ;
        bounceOff(movingObj , fixedObj4)
    }


else if(isTouching(movingObj,fixedObj3)){
     music.stop()
     movingObj.shapeColor = "blue" ;
     bounceOff(movingObj,fixedObj3)
}

else if(isTouching(movingObj,fixedObj2)){
    music.stop()
    movingObj.shapeColor = "green" ;
    bounceOff(movingObj,fixedObj2)
    movingObj.velocityX = 0;
    movingObj.velocityY = 0;
}

else if(isTouching(movingObj,fixedObj1)){
    music.stop()
    movingObj.shapeColor = "red" ;
    bounceOff(movingObj,fixedObj1)
}

if(movingObj.y < 0) {
music.stop()
movingObj.velocityY =  3;

}

drawSprites()





}

