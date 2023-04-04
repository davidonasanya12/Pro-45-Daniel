var d1;
var d2;
var ob1;
var ob2;
var ob3;

function preload(){
 d1= loadAnimation("d1.png","d2.png","d3.png");
 d2= loadAnimation("d4.png","d5.png","d6.png","d7.png","d8.png");
 bg= loadImage("sky.png");
 ob1= loadImage("obstacle1.png");
 ob2= loadImage("obstacle2.png");
 ob3= loadImage("obstacle3.png");
}

function setup() {
   
  createCanvas(800,400);
  dragon=createSprite(500, 300, 50, 50);
  dragon.addAnimation("dragons",d1);
  dragon=createSprite(250, 300, 50, 50);
  dragon.addAnimation("dragons",d2);
  
}



function draw() {
  background(bg);
  ob1=createImage(200,600,50,50)
  //obstacles = random(ob1,ob2,ob3);  
  drawSprites();
}