let gameWindowSize = [800,600];
let ball = {x: gameWindowSize[0] / 2, y: gameWindowSize[1] / 2,
            width: 50, height: 50,dx : 1,dy : 1,speed : 5,dLock : false};

function moveBall() {
  //Direction lock
  if (ball.x > 400 && ball.x < 600){
    ball.dlock = false;
  }
  //Player 1 & 2 collision
  if (checkCollision()) {
      if (!ball.dlock){
        ball.dx *= -1;
        ball.dlock = true;
      }
      if (ball.x > 700 + ball.speed
       || ball.x < 50 - ball.speed){
         ball.dy *= -1;
         ball.y += ball.dy * ball.speed;
       }
   }
  //Wall collision
  if (ball.x < 0 ||
      ball.x > 800 - 50) {
        if (ball.x <= 0)player2.score += 1;
        else if(ball.x >= 800 - 50)player1.score += 1;
        ball.x = gameWindowSize[0] / 2;
        ball.y = gameWindowSize[1] / 2;
    }
  if (ball.y < 0 ||
      ball.y > 600 - 50) {
        ball.dy *= -1;
    }
  //Move ball
  ball.x += ball.dx * ball.speed;
  ball.y += ball.dy * ball.speed;
}
