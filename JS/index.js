//allow us to import classes from other scripts
/*import Paddle from "/JS/paddle";*/
//import {Paddle} from "/JS/paddle";
//import Paddle from "paddle.js";
//import {Paddle} from "./paddle.js";
//import {Paddle} from "/js-game-dev/JS/paddle";
import Ball from "/js-game-dev/JS/ball";

import InputHandler from "/JS/input";
//import InputHander from "/js-game-dev/JS/input";

import Paddle from "/JS/paddle";

let canvas = document.getElementById("gameScreen");

let ctx = canvas.getContext("2d");




const GAME_WIDTH =800;
const GAME_HEIGHT =600;



let paddle = new Paddle(GAME_WIDTH,GAME_HEIGHT);
let ball = new Ball(GAME_WIDTH,GAME_HEIGHT);

new InputHandler(paddle);

paddle.draw(ctx);



let lastTime = 0; //use let as the variable will change




function gameLoop(timeStamp){
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;


    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);//clear what was previously in that spot
    paddle.update(deltaTime);
    paddle.draw(ctx);

    ball.update(deltaTime);
    ball.draw(ctx);


    
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
//gameLoop();//function call

/*
ctx.fillStyle="#f00"; //color of shape

ctx.fillRect(20, 20, 100, 100);//size of shape




ctx.fillRect(340, 200, 50, 50);//size of shape */
