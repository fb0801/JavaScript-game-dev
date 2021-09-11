//allow us to import classes from other scripts

//import Ball from "/JS/ball";
import {Ball} from './ball.js';

//import InputHandler from "/JS/input";
import { InputHandler} from "./input.js";
import InputHander from "/js-game-dev/JS/input";

import Paddle from "/JS/paddle";
//import {Paddle} from "./paddle.js";

import Brick from "./brick";
//import {Brick} from "./brick.js";

import { buildLevel,level1 } from "./levels.js";

export default class Game{


    constructor(gameWidth,gameHeight){
this.gameWidth = gameWidth;
this.gameHeight = gameHeight;


       

    }
start(){
    this.paddle = new Paddle(this);
    this.ball = new Ball(this);

//let brick = new Brick(this, {x:20, y:20});
let bricks = buildLevel(this, level1); 


    this.gameObjects=[
        this.ball,this.paddle, ...bricks
    ];

    new InputHandler(this.paddle);
}



    update(deltaTime){
        //this.paddle.update(deltaTime);
        //this.ball.update(deltaTime);


        this.gameObjects.forEach((object) => object.update(deltaTime));


        this.gameObjects = this.gameObjects.filter(object => !object.markedForDeletion);
    }
    draw(ctx){
        //this.paddle.draw(ctx);
        //this.ball.draw(ctx);

        this.gameObjects.forEach((object) => object.draw(ctx));
    }
}