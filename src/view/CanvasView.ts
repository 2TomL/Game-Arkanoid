import { Brick } from "../sprites/Brick.js";
import { Paddle } from "../sprites/Paddle.js";
import { Ball } from "../sprites/Ball.js";

export class CanvasView{
    canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D | null;
    private scoreDisplay: HTMLObjectElement | null;
    private start: HTMLObjectElement | null;
    private info: HTMLObjectElement | null;

    constructor(canvasName: string){
        this.canvas = document.querySelector(canvasName)as HTMLCanvasElement;
        this.context = this.canvas.getContext('2d');
        this.scoreDisplay = document.querySelector('#score');
        this.start = document.querySelector('#start');
        this.info = document.querySelector('#info');
    }

    clear(): void{
        this.context?.clearRect(0,0,this.canvas.width,this.canvas.height);
    }
    initStartButton(startFunction:(view: CanvasView)=>void):void{
        this.start?.addEventListener('click', ()=> startFunction(this))
    }
    drawScore(score: number): void{
        if(this.scoreDisplay)this.scoreDisplay.innerHTML=score.toString();
    }
    drawInfo(text: string): void{
        if(this.info)this.info.innerHTML=text;
    }
    drawSprite(brick: Brick | Paddle | Ball): void {
        if (!brick) return;
    
        // Debug logging for paddle
        if (brick.width === 150) { // Paddle has width 150
            console.log(`Drawing paddle: x=${brick.pos.x}, y=${brick.pos.y}, width=${brick.width}, height=${brick.height}`);
        }
    
        this.context?.drawImage(
          brick.image,
          brick.pos.x,
          brick.pos.y,
          brick.width,
          brick.height
        );
      }
      drawBricks(bricks: Brick[]): void {
        bricks.forEach(brick => this.drawSprite(brick));
      }
    }