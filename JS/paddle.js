class Paddle{

constructor(game_Width, game_Height){
this.width = 150;
this.height=30;



    this.position ={
        x:game_Width /2 - this.width / 2,
        y:game_Height - this.height - 10,
    }



}

draw(ctx){

ctx.fillRect(this.position.x, this.position.y, this.width,this.height);

}


}