const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backIMG,backgroundIMG, boyIMG, boy, girlIMG, girl, playB, play;
var gameState = 0, level1Img, level1, level_1;

function preload(){
backIMG = loadImage("images/background_game.jpg");
boyIMG = loadImage("images/boy image 1.png");
girlIMG = loadImage("images/girl image 3.png");
playB = loadImage("images/play button.png");
level1Img = loadImage("images/Level-1.png");
}

function setup(){
    createCanvas(windowWidth-8, windowHeight-10);

    backgroundIMG = createSprite(windowWidth/2,windowHeight/2,windowWidth-8,windowHeight-10);
    backgroundIMG.addImage(backIMG);
    backgroundIMG.scale = 1.6;

    boy = createSprite(windowWidth/4,windowHeight/1.5,100,100);
    boy.addImage(boyIMG);
    boy.scale = 0.7;

    girl = createSprite(windowWidth/2,windowHeight/1.5, 10,10)
    girl.addImage(girlIMG);
    girl.scale = 0.4;

    play = createSprite(700,200,100,100);
    play.addImage(playB);
    play.scale = 0.7;

    level1 = createSprite(windowWidth/4,windowHeight/6,10,20);
    level1.addImage(level1Img);
    level1.scale = 0.2;
    level1.visible = false;

    level_1 = new Level1();
}

function draw(){
    background("white");

    if(mousePressedOver(play)){
        gameState = 1;

      // window.location.href = "page1.html";
    }
    if(gameState===1){
        boy.destroy();
        girl.destroy();
        play.destroy();
        backgroundIMG.destroy();
        textSize(55);
        fill("black");
        textFont("algerian");
        text("Choose a Level", windowWidth/3,windowHeight/10);
        level1.visible = true;
            
            if(mousePressedOver(level1)){
                gameState = 2;
                level1.destroy();
            }
            
    }
    if(gameState===2){
       level_1.display();
    }
    drawSprites();
}