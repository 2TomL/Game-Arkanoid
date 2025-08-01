export class Ball {
    constructor(speed, ballSize, position, image) {
        this.ballSize = ballSize;
        this.position = position;
        this.ballImage = new Image();
        this.ballSize = ballSize;
        this.position = position;
        this.speed = {
            x: speed,
            y: -speed
        };
        this.ballImage.src = image;
    }
    get width() {
        return this.ballSize;
    }
    get height() {
        return this.ballSize;
    }
    get pos() {
        return this.position;
    }
    get image() {
        return this.ballImage;
    }
    changeYDirection() {
        this.speed.y = -this.speed.y;
    }
    changeXDirection() {
        this.speed.x = -this.speed.x;
    }
    moveBall() {
        this.pos.x += this.speed.x;
        this.pos.y += this.speed.y;
    }
}
//# sourceMappingURL=Ball.js.map