export class Collision {
    isCollidingBrick(ball, brick) {
        // Add some tolerance for collision detection
        const tolerance = 2;
        if (ball.pos.x + ball.width > brick.pos.x - tolerance &&
            ball.pos.x < brick.pos.x + brick.width + tolerance &&
            ball.pos.y + ball.height > brick.pos.y - tolerance &&
            ball.pos.y < brick.pos.y + brick.height + tolerance) {
            return true;
        }
        return false;
    }
    // Check ball collision with bricks
    isCollidingBricks(ball, bricks) {
        let colliding = false;
        // Loop backwards to safely remove items from array
        for (let i = bricks.length - 1; i >= 0; i--) {
            const brick = bricks[i];
            if (this.isCollidingBrick(ball, brick)) {
                console.log(`Collision detected with brick ${i}, energy before: ${brick.energy}`);
                ball.changeYDirection();
                // Reduce brick energy
                brick.energy -= 1;
                console.log(`Brick ${i} energy after hit: ${brick.energy}`);
                // Remove brick if energy is 0 or less
                if (brick.energy <= 0) {
                    console.log(`Removing brick ${i} - energy depleted`);
                    bricks.splice(i, 1);
                }
                colliding = true;
                break; // Only handle one collision per frame
            }
        }
        return colliding;
    }
    checkBallCollision(ball, paddle, view) {
        // 1. Check ball collision with paddle
        if (ball.pos.x + ball.width > paddle.pos.x &&
            ball.pos.x < paddle.pos.x + paddle.width &&
            ball.pos.y + ball.height === paddle.pos.y) {
            ball.changeYDirection();
        }
        // 2. Check ball collision with walls
        // Ball movement X constraints
        if (ball.pos.x > view.canvas.width - ball.width || ball.pos.x < 0) {
            ball.changeXDirection();
        }
        // Ball movement Y constraints
        if (ball.pos.y < 0) {
            ball.changeYDirection();
        }
    }
}
