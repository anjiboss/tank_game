import Tank from "/js/Tank.js";
import inputHandler from "/js/inputHandler.js";

const canvas = document.getElementById("game-screen");
const ctx = canvas.getContext("2d");

const gameWidth = 600;
const gameHeight = 600;

canvas.height = gameHeight;
canvas.width = gameWidth;

const tank = new Tank(gameWidth, gameHeight, 20, 0, "img/tank.png");
const enermyTank = new Tank(
  gameWidth,
  gameHeight,
  550,
  0,
  "img/enermy_tank.png"
);

new inputHandler(tank);

let lastTime,
  deltaTime = 0;

const gameLoop = (timeStamp) => {
  deltaTime = timeStamp - lastTime;

  lastTime = timeStamp;

  ctx.clearRect(0, 0, gameWidth, gameHeight);
  tank.update(ctx, tank.background);

  enermyTank.update(ctx, enermyTank.background);
  requestAnimationFrame(gameLoop);
};

gameLoop();
