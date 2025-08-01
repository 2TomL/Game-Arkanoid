export class CanvasView {
    constructor(canvasName) {
        console.log('CanvasView constructor called with:', canvasName);
        this.canvas = document.querySelector(canvasName);
        console.log('Canvas element found:', this.canvas);
        this.context = this.canvas.getContext('2d');
        this.scoreDisplay = document.querySelector('#score');
        this.start = document.querySelector('#start');
        this.info = document.querySelector('#info');
        console.log('Start button found:', this.start);
        console.log('Score display found:', this.scoreDisplay);
        console.log('Info display found:', this.info);
    }
    clear() {
        var _a;
        (_a = this.context) === null || _a === void 0 ? void 0 : _a.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    initStartButton(startFunction) {
        var _a;
        (_a = this.start) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => startFunction(this));
    }
    drawScore(score) {
        if (this.scoreDisplay)
            this.scoreDisplay.innerHTML = score.toString();
    }
    drawInfo(text) {
        if (this.info)
            this.info.innerHTML = text;
    }
    drawSprite(brick) {
        var _a;
        if (!brick)
            return;
        (_a = this.context) === null || _a === void 0 ? void 0 : _a.drawImage(brick.image, brick.pos.x, brick.pos.y, brick.width, brick.height);
    }
    drawBricks(bricks) {
        bricks.forEach(brick => this.drawSprite(brick));
    }
}
//# sourceMappingURL=CanvasView.js.map