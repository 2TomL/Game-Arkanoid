export class Paddle {
    constructor(speed, paddleWidth, paddleHeight, position, image) {
        this.speed = speed;
        this.paddleWidth = paddleWidth;
        this.paddleHeight = paddleHeight;
        this.position = position;
        this.paddleImage = new Image();
        this.handleKeyUp = (e) => {
            if (e.code === "ArrowLeft" || e.key === "ArrowLeft")
                this.moveLeft = false;
            if (e.code === "ArrowRight" || e.key === "ArrowRight")
                this.moveRight = false;
        };
        this.handleKeyDown = (e) => {
            if (e.code === "ArrowLeft" || e.key === "ArrowLeft")
                this.moveLeft = true;
            if (e.code === "ArrowRight" || e.key === "ArrowRight")
                this.moveRight = true;
        };
        this.speed = speed;
        this.paddleWidth = paddleWidth;
        this.paddleHeight = paddleHeight;
        this.position = position;
        this.moveLeft = false;
        this.moveRight = false;
        this.paddleImage.src = image;
        document.addEventListener('keydown', this.handleKeyDown);
        document.addEventListener('keyup', this.handleKeyUp);
    }
    get width() {
        return this.paddleWidth;
    }
    get height() {
        return this.paddleWidth;
    }
    get pos() {
        return this.position;
    }
    get image() {
        return this.paddleImage;
    }
    get isMovingLeft() {
        return this.moveLeft;
    }
    get isMovingRight() {
        return this.moveRight;
    }
    movePaddle() {
        if (this.moveLeft)
            this.pos.x -= this.speed;
        if (this.moveRight)
            this.pos.x += this.speed;
    }
}
