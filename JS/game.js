//allow us to import classes from other scripts

//import Ball from "/JS/ball";
import {Ball} from './ball.js';

//import InputHandler from "/JS/input";
import { InputHandler} from "./input.js";
//import InputHander from "/js-game-dev/JS/input";

//-import Paddle from "/JS/paddle";
import {Paddle} from "./paddle.js";

//-import Brick from "./brick";
import {Brick} from "./brick.js";

import { buildLevel,level1 } from "./levels.js";

const GAMESTATE ={
    PAUSED: 0,
    RUNNING:1,
    MENU:2,
    GAMEOVER: 3

}

export default class Game{


    constructor(gameWidth,gameHeight){
this.gameWidth = gameWidth;
this.gameHeight = gameHeight;


       

    }
start(){

this.GAMESTATE.RUNNING;

    this.paddle = new Paddle(this);
    this.ball = new Ball(this);

//let brick = new Brick(this, {x:20, y:20});
let bricks = buildLevel(this, level1); 


    this.gameObjects=[
        this.ball,this.paddle, ...bricks
    ];

    new InputHandler(this.paddle, this);
}



    update(deltaTime){
        //this.paddle.update(deltaTime);
        //this.ball.update(deltaTime);

        if(this.gamestate ==GAMESTATE.PAUSED) return;


        this.gameObjects.forEach((object) => object.update(deltaTime));


        this.gameObjects = this.gameObjects.filter(object => !object.markedForDeletion);
    }
    draw(ctx){
        //this.paddle.draw(ctx);
        //this.ball.draw(ctx);

        this.gameObjects.forEach((object) => object.draw(ctx));

        if (this.gamestate == GAMESTATE.PAUSED){
        //to show the screen has been paused
        ctx.rect(0,0, this.gameWidth, this.gameHeight);
        ctx.fillstyle ="rgba(0,0,0,0.5)";
        ctx.fill();


        //text to show the game is paused 
        ctx.font = "30px Arial";
        ctx.fillstyle= "white";
        ctx.textalign = "center";
        ctx.filltext("PAUSED", this.gameWidth / 2, this.gameHeight /2);
    }
}

    togglePause(){
            if(this.gamestate == GAMESTATE.PAUSED){
                this.gamestate == GAMESTATE.RUNNING;
            } else{
                this.gamestate = GAMESTATE.PAUSED;
            }
    }
}