let coinsFrames = [];

function preload() {
  coinsFrames.push(loadImage("assets/coin1.png"));
  coinsFrames.push(loadImage("assets/coin2.png"));
  coinsFrames.push(loadImage("assets/coin3.png"));
  coinsFrames.push(loadImage("assets/coin4.png"));
  coinsFrames.push(loadImage("assets/coin5.png"));
  coinsFrames.push(loadImage("assets/coin6.png"));
}

let counter = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  clear();
  //  every 8 frames, increment the counter to move to the next image
  if (frameCount % 8 === 0) {
    counter = (counter + 1) % coinsFrames.length; // to not try to access a frame positioned out of the boundaries of our array
  }
  const coinFrame = coinsFrames[counter];
  image(coinFrame, 0, 0, 500, 500);
}
