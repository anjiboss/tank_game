export default class inputHandler {
  constructor(tank) {
    addEventListener("keypress", (e) => {
      switch (e.key) {
        case "a":
          tank.moveLeft();
          break;
        case "d":
          tank.moveRight();
          break;
        case "s":
          tank.moveDown();
          break;
        case "w":
          tank.moveUp();
          break;

        default:
          break;
      }
    });
  }
}
