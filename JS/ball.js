export default class Ball {

constructor(){
this.image = document.getElementById("img_ball");


}

draw(ctx){
    ctx.drawimage(this.image, 10,10,16,16);
}

update(){

}

}