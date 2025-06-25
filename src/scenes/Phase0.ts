import { Scene } from "phaser"

export class Phase0 extends Scene{
    //this.HomertSimp: Phaser.GameObjects.Sprite;
    constructor() {
        super({ key: "Phase0" });

        
    }

    preload() {
        this.load.spritesheet('HomerSimp', 'assets/HomerSimp.png', {
            frameWidth: 64,
            frameHeight: 64
        })
     }

    create() {
        this.HomerSimp = this.physics.add.sprite(400, 225, 'HomerSimp');
        
        this.anims.create({
            key: 'andar-direita',
            frames: this.anims.generateFrameNumbers('HomerSimp', { start: 87, end: 95 }),
            frameRate: 10,
            repeat: -1,
        });
        this.HomerSimp.play('andar-direita');
        this.HomerSimp.setVelocityX(100);
    }
}
