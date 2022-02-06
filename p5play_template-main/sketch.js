var box;      //variable 
function setup() {
  createCanvas(700,400);
  
  //create the box sprite
  box=createSprite(350, 200, 50, 50);
}

function draw() 
{
  background(30);
  drawSprites();

if(keyDown("right"))
{
  box.x=box.x+5;
}

if(keyDown("left"))
{
  box.x=box.x-5;
}

}


//library (contain the predefined functions)
//two types of functions -User defined functions and predefined functions 
//to use predefined functions, add its library in the folder and mention it in index.html



