import { Vector } from '../types.js';

export class Ball {
  private speed: Vector;
  private ballImage: HTMLImageElement = new Image();

  constructor(
    speed: number,
    private ballSize: number,
    private position: Vector,
    image: string
  ) {
    this.ballSize = ballSize;
    this.position = position;
    this.speed = {
      x: speed,
      y: -speed
    };
    this.ballImage.src = image;
  }
  get width(): number {
    return this.ballSize;
  }
  get height(): number {
    return this.ballSize;
  }
  get pos(): Vector {
    return this.position;
  }
  get image(): HTMLImageElement {
    return this.ballImage;
  }
  get speedY(): number {
    return this.speed.y;
  }
  changeYDirection(): void {
    this.speed.y = -this.speed.y;
  }
  changeXDirection(): void {
    this.speed.x = -this.speed.x;
  }
  moveBall(): void {
    this.pos.x += this.speed.x;
    this.pos.y += this.speed.y;
  }
}