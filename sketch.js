var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    //music
}


function setup(){
    canvas = createCanvas(1006,600);

    block1 = createSprite(128,580,240,30);
    block1.shapeColor = "blue";

    block2 = createSprite(372,580,238,30);
    block2.shapeColor = "orange";

    block3 = createSprite(610,580,233,30);
    block3.shapeColor = "red";

    block4 = createSprite(865,580,270,30);
    block4.shapeColor = "purple";

    //create two more blocks i.e. block3 and block4 here

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = "black";
    ball.velocityX = 4.0;
    ball.velocityY = 5.0;
    //write code to add velocityX and velocityY

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    

    
    //write code to bounce off ball from the block1 
    if(ball.isTouching(block1) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
    }



    if(ball.isTouching(block2) && ball.bounceOff(block2)){
        ball.shapeColor = "orange";
        //write code to set velocityX and velocityY of ball as 0

        //write code to stop music
    }
    if(ball.isTouching(block3) && ball.bounceOff(block3)){
        ball.shapeColor = "red";
    }



    if(ball.isTouching(block4) && ball.bounceOff(block4)){
        ball.shapeColor = "purple";
        //write code to set velocityX and velocityY of ball as   
        //write code to stop music
    }
    

    //write code to bounce off ball from the block3


    //write code to bounce off ball from the block4

    drawSprites();
}
