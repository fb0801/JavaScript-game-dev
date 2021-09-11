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

import { buildLevel,level1,level2 } from "./levels.js";

const GAMESTATE ={
    PAUSED: 0,
    RUNNING:1,
    MENU:2,
    GAMEOVER: 3,
    NEWLEVEL = 4

}

export default class Game{


    constructor(gameWidth,gameHeight){
this.gameWidth = gameWidth;
this.gameHeight = gameHeight;


this.GAMESTATE.MENU;

this.paddle = new Paddle(this);
this.ball = new Ball(this);
this.gameObjects = [];
this.lives =3;


this.levels =[level1, level2];
this.currentLevel=0;



new InputHandler(this.paddle, this);



    }
start(){
    if (this.gamestate !== GAMESTATE.MENU && this.GAMESTATE.NEWLEVEL) return; //||
//let brick = new Brick(this, {x:20, y:20});
this.bricks = buildLevel(this, this.levels[this.currentLevel]); 
    this.gameObjects=[
        this.ball,this.paddle];
        this.ball.reset();

        this.gamestate = GAMESTATE.RUNNING;
}



    update(deltaTime){
        //this.paddle.update(deltaTime);
        if (this.lives === 0 ) this.gamestate = GAMESTATE.GAMEOVER;

        if(this.gamestate === GAMESTATE.PAUSED || 
            this.gamestate === GAMESTATE.MENU ||
            this.gamestate === GAMESTATE.GAMEOVER
            ) return;

                if(this.brick.length ===0){
                   this.currentLevel++; //increase to the next game level
                   this.gamestate = GAMESTATE.NEWLEVEL;
                   this.start();
                }

                [...this.gameObjects, ...this.bricks].forEach(object => object.update(deltaTime)
                );


        this.bricks = this.bricks.filter(brick => !brick.markedForDeletion);
    }
    draw(ctx){
        //this.paddle.draw(ctx);
        //this.ball.draw(ctx);

        [...this.gameObjects, ...this.bricks].forEach((object) => object.draw(ctx));

        if (this.gamestate === GAMESTATE.PAUSED){
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

    if (this.gamestate === GAMESTATE.MENU){
        //to show for menu screen
        ctx.rect(0,0, this.gameWidth, this.gameHeight);
        ctx.fillstyle ="rgba(0,0,0,1)";
        ctx.fill();


        //text to show the game menu 
        ctx.font = "30px Arial";
        ctx.fillstyle= "white";
        ctx.textalign = "center";
        ctx.filltext("Press SPACEBAR to START Game", this.gameWidth / 2, this.gameHeight /2);

        
        
        
        if (this.gamestate === GAMESTATE.GAMEOVER){
            //to show for menu screen
            ctx.rect(0,0, this.gameWidth, this.gameHeight);
            ctx.fillstyle ="rgba(0,0,0,1)";
            ctx.fill();
    
    
            //text to show the game menu 
            ctx.font = "30px Arial";
            ctx.fillstyle= "white";
            ctx.textalign = "center";
            ctx.filltext("GAMEOVER", this.gameWidth / 2, this.gameHeight /2);
        }
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