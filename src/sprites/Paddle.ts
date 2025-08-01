import { Vector } from "../types.js";

export class Paddle{
    private paddleImage = new Image();
    private moveLeft: boolean;
    private moveRight: boolean;
    constructor(
        private speed: number,
        private paddleWidth: number,
        private paddleHeight: number,
        private position: Vector,
        image: string
      ) {
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
    get width(): number{
      return this.paddleWidth;
    }
    get height(): number{
      return this.paddleHeight; // Fixed: was paddleWidth
    }
    get pos(): Vector{
      return this.position;
    }
    get image(): HTMLImageElement{
      return this.paddleImage;
    }
    get isMovingLeft(): boolean{
      return this.moveLeft;
    }
    get isMovingRight(): boolean{
      return this.moveRight;
    }
    movePaddle(): void{
      // Move with boundary checking
      if(this.moveLeft && this.pos.x > 0) {
        this.pos.x -= this.speed;
      }
      if(this.moveRight && this.pos.x + this.width < 1000) { // Canvas width is 1000
        this.pos.x += this.speed;
      }
      
      // Clamp paddle within canvas bounds
      if (this.pos.x < 0) this.pos.x = 0;
      if (this.pos.x + this.width > 1000) this.pos.x = 1000 - this.width;
    }
    handleKeyUp = (e: KeyboardEvent): void =>{
      if (e.code === "ArrowLeft" || e.key === "ArrowLeft")this.moveLeft=false;
      if (e.code === "ArrowRight" || e.key === "ArrowRight")this.moveRight=false;
    };
    handleKeyDown = (e: KeyboardEvent): void =>{
      if (e.code === "ArrowLeft" || e.key === "ArrowLeft")this.moveLeft=true;
      if (e.code === "ArrowRight" || e.key === "ArrowRight")this.moveRight=true;
    };
    //alternative way
    //handleKeyEvent = (e: KeyboardEvent, isKeyUp: boolean): void => {
    //  if ((e.code === "ArrowLeft" || e.key === "ArrowLeft") && isKeyUp) {
    //    this.moveLeft = false;
    //  } else if ((e.code === "ArrowRight" || e.key === "ArrowRight") && isKeyUp) {
    //    this.moveRight = false;
    //  } else if ((e.code === "ArrowLeft" || e.key === "ArrowLeft") && !isKeyUp) {
    //    this.moveLeft = true;
    //  } else if ((e.code === "ArrowRight" || e.key === "ArrowRight") && !isKeyUp) {
    //    this.moveRight = true;
    //  }
    //};
}