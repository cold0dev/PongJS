//Todo:1.random dir start
let can = document.getElementById("gameWindow");
let ctx = can.getContext("2d");

function createText(s,x,y) {
  ctx.font = "120px Arial";
  ctx.fillStyle = "white";
  ctx.fillText(s, x, y);
}

function createBall() {
  ctx.fillStyle = "white";
  ctx.fillRect(ball.x,ball.y,ball.height,ball.width);
}

function createRect(color,x,y,w,h) {
  ctx.fillStyle = color;
  ctx.fillRect(x,y,w,h);
}

function refresh() {
  //BG
  createRect("black",0,0,800,600);
  //P1
  createText(player1.score,200,0+120);
  createRect("white",player1.x,player1.y,player1.width,player1.height);
  //P2
  createText(player2.score,600 - 60,0+120);
  createRect("white",player2.x,player2.y,player2.width,player2.height);
  //BALL
  createBall();
}

document.addEventListener("keydown", keyHandler,false);
setInterval(refresh,0);
setInterval(moveBall,30);
setInterval(ai,difficulty);
