import { CanvasView } from './view/CanvasView.js';
import { Ball } from './sprites/Ball.js';
import { Paddle } from './sprites/Paddle.js';
import { Collision } from './Collision.js';
// import PADDLE_IMAGE from './images/paddle.png';
// import BALL_IMAGE from './images/ball.png';
const PADDLE_IMAGE = './images/paddle.png';
const BALL_IMAGE = './images/ball.png';
import { PADDLE_SPEED, PADDLE_WIDTH, PADDLE_HEIGHT, PADDLE_STARTX, BALL_SPEED, BALL_SIZE, BALL_STARTX, BALL_STARTY } from './setup.js';
import { createBricks } from './helpers.js';
let gameOver = false;
let score = 0;
function setGameOver(view) {
    view.drawInfo('Game Over!');
    gameOver = false;
}
function setGameWin(View) {
    View.drawInfo('Game Won!');
    gameOver = false;
}
function gameLoop(view, bricks, paddle, ball, collision) {
    console.log('draw!');
    view.clear();
    view.drawBricks(bricks);
    view.drawSprite(paddle);
    view.drawSprite(ball);
    ball.moveBall();
    if ((paddle.isMovingLeft && paddle.pos.x > 0) ||
        (paddle.isMovingRight && paddle.pos.x < view.canvas.width - paddle.width)) {
        paddle.movePaddle();
    }
    collision.checkBallCollision(ball, paddle, view);
    const collidingBrick = collision.isCollidingBricks(ball, bricks);
    if (collidingBrick) {
        score += 1;
        view.drawScore(score);
    }
    if (ball.pos.y > view.canvas.height)
        gameOver = true;
    if (bricks.length === 0)
        return setGameWin(view);
    if (gameOver)
        return setGameOver(view);
    requestAnimationFrame(() => gameLoop(view, bricks, paddle, ball, collision));
}
function startGame(view) {
    score = 0;
    view.drawInfo('');
    view.drawScore(0);
    const collision = new Collision();
    const bricks = createBricks();
    const ball = new Ball(BALL_SPEED, BALL_SIZE, { x: BALL_STARTX, y: BALL_STARTY }, BALL_IMAGE);
    const paddle = new Paddle(PADDLE_SPEED, PADDLE_WIDTH, PADDLE_HEIGHT, {
        x: PADDLE_STARTX,
        y: view.canvas.height - PADDLE_HEIGHT - 5
    }, PADDLE_IMAGE);
    gameLoop(view, bricks, paddle, ball, collision);
}
const view = new CanvasView('#playField');
view.initStartButton(startGame);
//# sourceMappingURL=index.js.map