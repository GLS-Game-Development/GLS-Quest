import { Scene } from "phaser";

export class Boot extends Scene {
  constructor() {
    super({ key: "Boot" });
  }

  preload() {
    this.load.image("dungeon", "assets/dungeon.png");
  }

  create() {
    this.add.image(400, 225, "dungeon");
  }
}
