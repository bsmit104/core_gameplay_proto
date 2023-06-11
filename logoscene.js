class Logoscene extends Phaser.Scene {
    constructor() {
        super('logoscene');
    }
    preload() {
        this.load.path = "./assets/";
        this.load.image('logo', 'doctime_logo.png')
    }
    create() {
        cursors = this.input.keyboard.createCursorKeys();
        // set up Scene switcher
        const centerX = this.cameras.main.width / 2;
        const centerY = this.cameras.main.height / 2;
        this.add.image(centerX, centerY, 'logo').setScale(6);
        this.input.on('pointerdown', () => this.scene.start('title'));
        this.cameras.main.fadeIn(5000);
        this.time.addEvent({
            delay: 5000,
            loop: false,
            callback: () => {
                this.scene.start("title")
            }
        })
    }
    update() {
    }
}