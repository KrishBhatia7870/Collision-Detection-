var fixedrect, movingrect;

function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400, 200, 50, 50);
  movingrect = createSprite(200,200,80,30);
  fixedrect.shapeColor = "green";
  movingrect.shapeColor = "green";
  fixedrect.debug = true;
  movingrect.debug = true;


}

function draw() {
  background(0);  
  movingrect.y = World.mouseY;
  movingrect.x = World.mouseX;


console.log(movingrect.x)
console.log(fixedrect.x)


if(movingrect.x-fixedrect.x < movingrect.width/2 + fixedrect.width/2 && 
  fixedrect.x-movingrect.x < movingrect.width/2 + fixedrect.width/2 &&
  movingrect.y-fixedrect.y < movingrect.height/2 + fixedrect.height/2 &&
  fixedrect.y-movingrect.y < movingrect.height/2 + fixedrect.height/2){
  movingrect.shapeColor="red";
  fixedrect.shapeColor="red";
}
else{
  movingrect.shapeColor="green";
  fixedrect.shapeColor="green";
}






  drawSprites();
}