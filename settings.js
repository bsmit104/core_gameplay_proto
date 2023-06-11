class Settings extends Phaser.Scene {
    constructor() {
        super('settings');
    }
    preload() {
        this.load.path = "./assets/";
        this.load.image('resume', 'resume.png');
        this.load.image('audioon', 'audio_on.png');
        this.load.image('audiooff', 'audio_off.png');
        this.load.image('fulls', 'fullscreen.png');
        this.load.audio("theme", "DoctorTimeTheme.mp3");
    }
    create() {
        if (musicoff) {
            this.sound.stopAll();
        }

        const centerX = this.cameras.main.width / 2;
        const centerY = this.cameras.main.height / 2;

        this.cameras.main.setBackgroundColor('#36454f');

        this.back = this.add.image(centerX - 900, centerY - 500, 'resume')
            .setInteractive()
            .on('pointerover', () => this.back.setAlpha(0.4))
            .on('pointerout', () => this.back.setAlpha(1))
            .on('pointerdown', () => {
                this.scene.start('pause');
            });
        this.back.setFlipX(true);
        this.back.setScale(.8);

        this.audioon = this.add.image(centerX - 200, centerY, 'audioon')
        this.audioon.setScale(3)
            .setInteractive()
            .on('pointerover', () => this.audioon.setAlpha(0.4))
            .on('pointerout', () => this.audioon.setAlpha(1))
            .on('pointerdown', () => {
                /////////////////music on/////////////////
                musicoff = false;
                this.sound.stopAll();
                this.theme = this.sound.add('theme');
                this.theme.play();
                this.theme.loop = true;
            });

        this.audiooff = this.add.image(centerX + 200, centerY, 'audiooff')
        this.audiooff.setScale(3)
            .setInteractive()
            .on('pointerover', () => this.audiooff.setAlpha(0.4))
            .on('pointerout', () => this.audiooff.setAlpha(1))
            .on('pointerdown', () => {
                ////////////////music off///////////////
                musicoff = true;
                this.sound.stopAll();
            });

        this.fullsc = this.add.image(centerX, centerY - 200, "fulls")
        this.fullsc.setScale(4.7)
            .setInteractive({ useHandCursor: true })
            .on('pointerover', () => this.fullsc.setAlpha(0.4))
            .on('pointerout', () => this.fullsc.setAlpha(1))
            .on('pointerdown', () => {
                if (this.scale.isFullscreen) {
                    this.scale.stopFullscreen();
                } else {
                    this.scale.startFullscreen();
                }
            });
    }
}