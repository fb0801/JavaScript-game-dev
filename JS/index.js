//allow us to import classes from other scripts
//import Paddle from "/JS/paddle";
//import Paddle from "/JS/paddle";
import Paddle from ".paddle";
import InputHandler from "input.js";
//import InputHander from "/js-game-dev/JS/input";


let canvas = document.getElementById("gameScreen");

let ctx = canvas.getContext("2d");

const GAME_WIDTH =800;
const GAME_HEIGHT =600;



let paddle = new Paddle(GAME_WIDTH,GAME_HEIGHT);

new InputHandler(paddle);

paddle.draw(ctx);



let lastTime = 0; //use let as the variable will change


function gameLoop(timeStamp){
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;


    ctx.clearRect(0, 0, 800, 600);//clear what was previously in that spot
    paddle.update(deltaTime);
    paddle.draw(ctx);

    requestAnimationFrame(gameLoop);
}

gameLoop();//function call

/*
ctx.fillStyle="#f00"; //color of shape

ctx.fillRect(20, 20, 100, 100);//size of shape




ctx.fillRect(340, 200, 50, 50);//size of shape */
