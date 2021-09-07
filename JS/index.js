let canvas = document.getElementById("gameScreen");

let ctx = canvas.getContext("2d");



ctx.clearRect(0,800,600);//clear what was previously in that spot



ctx.fillStyle="#f00"; //color of shape

ctx.fillRect(20, 20, 100, 100);//size of shape


ctx.fillStyle="#00f"; //color of shape

ctx.fillRect(340, 200, 50, 50);//size of shape
