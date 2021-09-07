//allow us to import classes from other scripts

import Ball from "/JS/ball";

import InputHandler from "/JS/input";
//import InputHander from "/js-game-dev/JS/input";

import Paddle from "/JS/paddle";


export default class Game{


    constructor(gameWidth,gameHeight){
this.gameWidth = gameWidth;
this.gameHeight = gameHeight;


       

    }
start(){
    this.paddle = new Paddle(this);
    this.ball = new Ball(this);



    this.gameObjects=[
        this.ball,this.paddle
    ];

    new InputHandler(this.paddle);
}



    update(deltaTime){
        //this.paddle.update(deltaTime);
        //this.ball.update(deltaTime);


        this.gameObjects.forEach((object) => object.update(deltaTime));
    }
    draw(ctx){
        //this.paddle.draw(ctx);
        //this.ball.draw(ctx);

        this.gameObjects.forEach((object) => object.draw(ctx));
    }
}