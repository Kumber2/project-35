var balloon;





function setup() {
  createCanvas(500,500);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  
  var balloonPosition = database.ref('balloon/height');
  balloonPosition.on("value", readPosition, showError);
  
  drawSprites();
}



if(keyDown(LEFT_ARROW )){
  balloon.X =  balloon.x -10;
}

else if(keyDown(RIGHT_ARROW)){
  balloon.x = balloon.x + 10;
}

else if(keyDown(UP_ARROW)){
  balloon.y = balloon.y -10;
}

else if (keyDown(DOWN_ARROW)){
  balloon.y = balloon.y +10;
}

if(keyDown(UP_ARROW)){
  updateHeight(0, -10);
  balloon.scale = balloon.scale -0.01;
}


function updateHeight(x,y){
database.ref('balloon/height').set({
 'x' : height.x + x,
 'y' : height.y + y
})
}

function readHeight(data){
  height = data.val();
  balloon.x = height.x;
  balloon.y = height.y
}

function showError(){
  console.log("Error in writing to the database");
}

