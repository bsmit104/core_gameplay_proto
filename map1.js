class Map1 extends Phaser.Scene {
    constructor() {
        super('map1');
    }
    preload() {
        this.load.path = "./assets/";
        this.load.image('lev1', 'lev1.png')
        this.load.image('lev2', 'lev2.png')
        this.load.image('lev3', 'lev3.png')
        this.load.image('pause', 'pause.png')
        this.load.audio("theme", "DoctorTimeTheme.mp3");
    }
    create() {
        if (musicoff) {
            this.sound.stopAll();
        }
        else {
            this.sound.stopAll();
            this.theme = this.sound.add('theme');
            this.theme.play();
            this.theme.loop = true;
        }
        
        this.cameras.main.fadeIn(3000);
        // set up Phaser-provided cursor key input
        cursors = this.input.keyboard.createCursorKeys();

        previousScene = this.scene.key;

        const centerX = this.cameras.main.width / 2;
        const centerY = this.cameras.main.height / 2;

        this.cameras.main.setBackgroundColor('#536872');
        this.textObject0 = this.add.text(
            50, //x
            50,//y
            "map", //text
            {
                font: "20px Impact",
                color: "#FFFFFF",
                align: "center"
            } //style
        );

        this.lev1 = this.add.image(centerX - 500, centerY, 'lev1')
        this.lev1.setScale(4)
            .setInteractive()
            .on('pointerover', () => this.lev1.setAlpha(0.4))
            .on('pointerout', () => this.lev1.setAlpha(1))
            .on('pointerdown', () => {
                this.scene.start('level1')
            });

        //this.lev1.input.on('pointerdown', () => this.scene.start('level2'));
        this.lev2 = this.add.image(centerX, centerY, 'lev2')
        this.lev2.setScale(4)
        this.lev2.setTint(0xff0000);

        this.lev3 = this.add.image(centerX + 500, centerY, 'lev3')
        this.lev3.setScale(4)
        this.lev3.setTint(0xff0000);

        this.pause = this.add.image(centerX + 900, centerY - 500, 'pause')
        this.pause.setDepth(1)
        this.pause.setScale(2)
            .setInteractive()
            .on('pointerover', () => this.pause.setAlpha(0.4))
            .on('pointerout', () => this.pause.setAlpha(1))
            .on('pointerdown', () => {
                this.scene.start('pause')
            });
        this.pause.setOrigin(1, 0); 
    }
    update() {

    }
}