import { Scene } from "phaser";

export class Boot extends Scene {
    constructor() {
        super({ key: "Boot" });
    }
    preload() {
        // Load assets here
        this.load.image("img", "assets/img.png");
    }
    create() {
        // Start the next scene
        this.add.image(400, 225, "img");
    }
}
