//allow us to import classes from other scripts

//import Game from "/JS/Game";
import {Game} from "./game.js";


let canvas = document.getElementById("gameScreen");

let ctx = canvas.getContext("2d");




const GAME_WIDTH =800;
const GAME_HEIGHT =600;





//paddle.draw(ctx);

let game = new Game(GAME_WIDTH,GAME_HEIGHT);
game.start();

let lastTime = 0; //use let as the variable will change




function gameLoop(timeStamp){
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;


    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);//clear what was previously in that spot
   
    game.update(deltaTime);
    game.draw(ctx);


    
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
//gameLoop();//function call

/*
ctx.fillStyle="#f00"; //color of shape

ctx.fillRect(20, 20, 100, 100);//size of shape




ctx.fillRect(340, 200, 50, 50);//size of shape */
