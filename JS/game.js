//allow us to import classes from other scripts

import Ball from "/JS/ball";

import InputHandler from "/JS/input";
//import InputHander from "/js-game-dev/JS/input";

import Paddle from "/JS/paddle";
import Brick from "./brick";

export default class Game{


    constructor(gameWidth,gameHeight){
this.gameWidth = gameWidth;
this.gameHeight = gameHeight;


       

    }
start(){
    this.paddle = new Paddle(this);
    this.ball = new Ball(this);

//let brick = new Brick(this, {x:20, y:20});
let brick = [];
for(let i=0;i<10; i++){
    bricks.push(new Brick(this, {x: i * 52, y: 30}));

}

    this.gameObjects=[
        this.ball,this.paddle, ...bricks
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