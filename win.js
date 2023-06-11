class Win extends Phaser.Scene {
    constructor() {
        super('win');
    }
    preload() {
        this.load.path = "./assets/";
        this.load.image('win', 'uwin.png');
        this.load.audio("theme", "DoctorTimeTheme.mp3");
    }
    create() {
        this.sound.stopAll();
        this.theme = this.sound.add('theme');
        this.theme.play();
        this.theme.loop = true;

        this.cameras.main.setBackgroundColor('#000');

        const centerX = this.cameras.main.width / 2;
        const centerY = this.cameras.main.height / 2;

        this.win = this.add.image(centerX, centerY + 200, 'win');
        this.win.setScale(3);

        const playText = this.add.text(centerX + 250, centerY + 300, 'HOME', { fontSize: '80px', fill: '#fff' });
        playText.setDepth(1);
        playText.setInteractive();
        playText.on('pointerover', () => {
            playText.setStyle({ fill: '#ff0' });
        });
        playText.on('pointerout', () => {
            playText.setStyle({ fill: '#fff' });
        });
        playText.on('pointerdown', () => {
            this.scene.start('title');
        });

        const credText = this.add.text(centerX - 400, centerY + 300, 'CREDITS', { fontSize: '80px', fill: '#fff' });
        playText.setDepth(1);
        credText.setInteractive();
        credText.on('pointerover', () => {
            credText.setStyle({ fill: '#ff0' });
        });
        credText.on('pointerout', () => {
            credText.setStyle({ fill: '#fff' });
        });
        credText.on('pointerdown', () => {
            this.scene.start('cred');
        });
    }
}