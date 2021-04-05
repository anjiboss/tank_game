export default class Tank {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

    this.width = 50;
    this.height = 50;

    this.position = {
      x: gameWidth / 2 - this.width / 2,
      y: gameHeight - this.height - 20,
    };
    this.velocity = 30;
  }

  draw(ctx) {
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  moveLeft() {}

  update(deltaTime) {
    if (!deltaTime) return;
  }
}
