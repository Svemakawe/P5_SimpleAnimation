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
  // speed of changing images
  if (frameCount % 8 === 0) {
    counter = (counter + 1) % coinsFrames.length; // to not go over the bounds of how many images
  }
  const coinFrame = coinsFrames[counter];
  image(coinFrame, 0, 0, 500, 500);
}
