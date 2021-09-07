//allow us to import classes from other scripts
import Paddle from 'JS/paddle';


let canvas = document.getElementById("gameScreen");

let ctx = canvas.getContext("2d");

const GAME_WIDTH =800;
const GAME_HEIGHT =600;


ctx.clearRect(0,0,800,600);//clear what was previously in that spot

let paddle = new Paddle(GAME_WIDTH,GAME_HEIGHT);


paddle.draw(ctx);

/*
ctx.fillStyle="#f00"; //color of shape

ctx.fillRect(20, 20, 100, 100);//size of shape




ctx.fillRect(340, 200, 50, 50);//size of shape */
