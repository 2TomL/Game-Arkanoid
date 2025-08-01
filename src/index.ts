import { CanvasView } from './view/CanvasView.js';
import { Ball } from './sprites/Ball.js';
import { Brick } from './sprites/Brick.js';
import { Paddle } from './sprites/Paddle.js';
import { Collision } from './Collision.js';
import { TauntSystem } from './TauntSystem.js';
// import PADDLE_IMAGE from './images/paddle.png';
// import BALL_IMAGE from './images/ball.png';
const PADDLE_IMAGE = './images/paddle.png';
const BALL_IMAGE = './images/ball.png';


import{
    PADDLE_SPEED,
    PADDLE_WIDTH,
    PADDLE_HEIGHT,
    PADDLE_STARTX,
    BALL_SPEED,
    BALL_SIZE,
    BALL_STARTX,
    BALL_STARTY
} from './setup.js';

import { createBricks } from './helpers.js';

let gameOver = false;
let score = 0;
const tauntSystem = new TauntSystem();

function setGameOver(view:CanvasView){
    view.drawInfo('Game Over!');
    gameOver = false;
    tauntSystem.stopGame();
    tauntSystem.showGameOverTaunt(score);
}

function setGameWin(View: CanvasView){
    View.drawInfo('Game Won!');
    gameOver = false;
    tauntSystem.stopGame();
    tauntSystem.showVictoryTaunt();
}

function gameLoop(
    view: CanvasView,
    bricks: Brick[],
    paddle: Paddle,
    ball: Ball,
    collision: Collision
){
    console.log(`Game loop - Bricks remaining: ${bricks.length}`);
  view.clear();
  view.drawBricks(bricks);
  view.drawSprite(paddle);
  view.drawSprite(ball);
  ball.moveBall();
  if (
    (paddle.isMovingLeft && paddle.pos.x > 0) ||
    (paddle.isMovingRight && paddle.pos.x < view.canvas.width - paddle.width)
  ) {
    paddle.movePaddle();
  }
  collision.checkBallCollision(ball, paddle, view);
  const collidingBrick = collision.isCollidingBricks(ball, bricks);
  if (collidingBrick) {
    score += 1;
    view.drawScore(score);
    console.log(`Score updated to: ${score}, Bricks left: ${bricks.length}`);
  }
  if (ball.pos.y > view.canvas.height) {
    gameOver = true;
    tauntSystem.onBallMiss();
  }
  if (bricks.length === 0) return setGameWin(view);
  if (gameOver) return setGameOver(view);

    requestAnimationFrame(()=>gameLoop(view, bricks, paddle, ball, collision));
}

function startGame(view: CanvasView) {

    score = 0;
    view.drawInfo('');
    view.drawScore(0);
    tauntSystem.startGame();
    tauntSystem.showWelcomeTaunt();
    
    const collision = new Collision();
    const bricks = createBricks();
    const ball = new Ball(
      BALL_SPEED,
      BALL_SIZE,
      { x: BALL_STARTX, y: BALL_STARTY },
      BALL_IMAGE
    );
    const paddle = new Paddle(
      PADDLE_SPEED,
      PADDLE_WIDTH,
      PADDLE_HEIGHT,
      {
        x: PADDLE_STARTX,
        y: view.canvas.height - PADDLE_HEIGHT - 5
      },
      PADDLE_IMAGE
    );
  
    gameLoop(view, bricks, paddle, ball, collision);
  }
const view = new CanvasView('#playField');
view.initStartButton(startGame);
