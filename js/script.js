import Tank from "/js/Tank.js";
import inputHandler from "/js/inputHandler.js";

const canvas = document.getElementById("game-screen");
const ctx = canvas.getContext("2d");

const gameWidth = 600;
const gameHeight = 600;

canvas.height = gameHeight;
canvas.width = gameWidth;

const tank = new Tank(gameWidth, gameHeight);
tank.draw(ctx);

new inputHandler(tank);

let lastTime = 0;

const gameLoop = (timeStamp) => {
  let deltaTime = timeStamp - lastTime;

  lastTime = timeStamp;

  ctx.clearRect(0, 0, gameWidth, gameHeight);

  tank.update(deltaTime);
  tank.draw(ctx);

  requestAnimationFrame(gameLoop);
};

gameLoop();
