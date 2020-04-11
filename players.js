let player1 = {x: 0, y: 0, width: 50, height: 150,score: 0};
let player2 = {x: 750, y: 0, width: 50, height: 150,score: 0};
let difficulty = 80;

function keyHandler(e){
  const keyName = e.key;

  if (keyName === "ArrowDown" && !checkCollision()) {
      if (player1.y == 600 - 150)return;
      player1.y += 10;
  }
  else if (keyName === "ArrowUp" && !checkCollision()) {
      if (player1.y == 0)return;
      player1.y -= 10;
  }
}

function ai(){
  if (ball.y > player2.y && player2.y < 600-150 && difficulty < 100 && !checkCollision()){
    //if (ball.x > 800-100)return;
    player2.y += 10;
  }
  else if (ball.y < player2.y && player2.y > 0 && difficulty < 100 && !checkCollision()){
    //if (ball.x > 800-100)return;
    player2.y -= 10;
  }
}

function checkCollision(){
  if (player1.x < ball.x + ball.width &&
   player1.x + player1.width > ball.x &&
   player1.y < ball.y + ball.height &&
   player1.y + player1.height > ball.y){
     return true;
   }
  if (player2.x < ball.x + ball.width &&
    player2.x + player2.width > ball.x &&
    player2.y < ball.y + ball.height &&
    player2.y + player2.height > ball.y) {
      return true;
    }
  return false;
}
