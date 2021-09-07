//import Paddle from "./paddle";

export default class InputHandler {


constructor(paddle){

document.addEventListener('keydown',event => {

alert(event.keycode);

switch(event.keycode){
case 37:
    paddle.moveLeft();
    break;



    case 39:
        paddle.moveRight();
        break;
}


});


}
}