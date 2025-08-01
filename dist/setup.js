// import RED_BRICK_IMAGE from './images/brick-red.png';
// import BLUE_BRICK_IMAGE from './images/brick-blue.png';
// import GREEN_BRICK_IMAGE from './images/brick-green.png';
// import YELLOW_BRICK_IMAGE from './images/brick-yellow.png';
// import PURPLE_BRICK_IMAGE from './images/brick-purple.png';
const RED_BRICK_IMAGE = './images/brick-red.png';
const BLUE_BRICK_IMAGE = './images/brick-blue.png';
const GREEN_BRICK_IMAGE = './images/brick-green.png';
const YELLOW_BRICK_IMAGE = './images/brick-yellow.png';
const PURPLE_BRICK_IMAGE = './images/brick-purple.png';
const canvas = document.querySelector('#playField');
// Constants
export const STAGE_PADDING = 10;
export const STAGE_ROWS = 20;
export const STAGE_COLS = 10;
export const BRICK_PADDING = 5;
export const BRICK_WIDTH = canvas
    ? Math.floor((canvas.width - STAGE_PADDING * 2) / STAGE_COLS) - BRICK_PADDING
    : 100;
export const BRICK_HEIGHT = canvas
    ? Math.floor((canvas.height - STAGE_PADDING * 2) / STAGE_ROWS) - BRICK_PADDING
    : 30;
export const PADDLE_WIDTH = 150;
export const PADDLE_HEIGHT = 25;
export const PADDLE_STARTX = 450;
export const PADDLE_SPEED = 10;
export const BALL_SPEED = 3; // Reduced from 4 for more relaxed gameplay
export const BALL_SIZE = 20;
export const BALL_STARTX = 500;
export const BALL_STARTY = 400;
export const BRICK_IMAGES = {
    1: RED_BRICK_IMAGE,
    2: GREEN_BRICK_IMAGE,
    3: YELLOW_BRICK_IMAGE,
    4: BLUE_BRICK_IMAGE,
    5: PURPLE_BRICK_IMAGE
};
export const BRICK_ENERGY = {
    1: 1,
    2: 1,
    3: 2,
    4: 2,
    5: 3 // Purple brick
};
// prettier-ignore
export const LEVEL = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 1, 1, 1, 1, 1, 1, 0, 0,
    0, 2, 2, 2, 2, 2, 2, 2, 2, 0,
    0, 3, 3, 3, 3, 3, 3, 3, 3, 0,
    0, 0, 4, 4, 4, 4, 4, 4, 0, 0,
    0, 0, 5, 5, 0, 0, 5, 5, 0, 0,
];
