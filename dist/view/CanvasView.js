export class CanvasView {
    constructor(canvasName) {
        this.canvas = document.querySelector(canvasName);
        this.context = this.canvas.getContext('2d');
        this.scoreDisplay = document.querySelector('#score');
        this.start = document.querySelector('#start');
        this.info = document.querySelector('#info');
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
        // Debug logging for paddle
        if (brick.width === 150) { // Paddle has width 150
            console.log(`Drawing paddle: x=${brick.pos.x}, y=${brick.pos.y}, width=${brick.width}, height=${brick.height}`);
        }
        (_a = this.context) === null || _a === void 0 ? void 0 : _a.drawImage(brick.image, brick.pos.x, brick.pos.y, brick.width, brick.height);
    }
    drawBricks(bricks) {
        bricks.forEach(brick => this.drawSprite(brick));
    }
}
