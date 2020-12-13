const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var bg = "sprites/bg.png"; 

//var score = 0;

var gameState = "onSling";

function preload() {
    //backgroundImg = loadImage("sprites/bg.png");
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,300,400,20);
    ground1 = new Ground(500,height,1600,20);

    ground2 = new Ground(1000,200,300,20);
    //platform = new Ground(150, 305, 300, 170);
    //5 blocks for the Lower level
    box1 = new Box(510,210,60,60);
    box2 = new Box(570,210,60,60);
    box3 = new Box(630,210,60,60);
    box4 = new Box(695,210,60,60);
    box5 = new Box(450,210,60,60);

    //3 blocks for the second level
    box6 = new Box(510,230,60,60);
    box7 = new Box(570,260,60,60);
    box8 = new Box(630,290,60,60);

    //1 block for the top level
    box9 = new Box(570,105,60,60);
    
    bird = new Bird(100,300);

    //box10 = new Box(1000,100,40,40);
    box11 = new Box(1000,160,40,40);
    box12 = new Box(910,160,40,40);
    box13 = new Box(960,160,40,40);
    box14 = new Box(1000,160,40,40);
    box15 = new Box(1100,160,40,40);
    box16 = new Box(1050,160,40,40);
    box17 = new Box(1050,160,40,40);
    box18 = new Box(960,160,40,40);
    box19 = new Box(1000,160,40,40);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:100, y:300});
}

function draw(){
    background("magenta");
    
     

     
    textSize(40);
    //text("Score: " + score, width - 300, 50);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    //pig1.display();
    //pig1.score();
    //log1.display();

    //box3.display();
    //box4.display();
    //pig3.display();
    //pig3.score();
    //log3.display();

    //box5.display();
    //log4.display();
    //log5.display();

     box3.display();
     box4.display();
     box5.display();
     box6.display();
     box7.display();
     box8.display();
     box9.display();
     //box10.display();
     box11.display();
     box12.display();
     box13.display();
     box14.display();
     box15.display();
     box16.display();
     box17.display();
     box18.display();
     box19.display();

    bird.display();

    ground2.display();
    ground1.display();
    //platform.display();
    //log6.display();
    //slingshot.display(); 

    
    
     
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    } 
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
                  
    }
}

 