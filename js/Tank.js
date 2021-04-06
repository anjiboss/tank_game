export default class Tank {
  constructor(gameWidth, gameHeight, basePos, angle, img) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

    this.width = 50;
    this.height = 50;

    this.position = {
      x: gameWidth / 2 - this.width / 2,
      y: gameHeight - this.height - basePos,
    };
    this.velocity = 30;
    this.angle = angle;

    this.background = new Image();
    this.background.src = img;
  }

  moveLeft() {
    this.angle -= 90;
    this.position.x -= this.velocity;
  }

  moveRight() {
    this.angle += 90;
    this.position.x += this.velocity;
  }

  moveUp() {
    this.position.y -= this.velocity;
  }

  moveDown() {
    this.position.y += this.velocity;
  }

  update(ctx, image) {
    ctx.rotate(this.angle);
    ctx.drawImage(
      image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}
