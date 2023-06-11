class Cred extends Phaser.Scene {
    constructor() {
        super('cred');
    }
    preload() {
        this.load.path = "./assets/";
        this.load.audio("theme", "DoctorTimeTheme.mp3");
    }
    create() {
        cursors = this.input.keyboard.createCursorKeys();
        // set up Scene switcher
        
        const centerX = this.cameras.main.width / 2;
        const centerY = this.cameras.main.height / 2;

        this.add.text(centerX - 250, centerY- 100, "Brayden Smith - Art Creator, Programmer\n\nAly Cerutti - Tech Lead, Programmer\n\nAaron Lee - Lead Programmer\n\nAkash Basu - Programmer, Testing Lead\n\nConnor Green - Music Dev, Production Lead").setFontSize(40);

        const titletext = this.add.text(130, 400, 'BACK TO TITLE', { fontSize: '40px', fill: '#fff' });
        //playText.setDepth(1);
        titletext.setInteractive();
        titletext.on('pointerover', () => {
            titletext.setStyle({ fill: '#ff0' });
        });
        titletext.on('pointerout', () => {
            titletext.setStyle({ fill: '#fff' });
        });
        titletext.on('pointerdown', () => {
            this.scene.start('title');
        });
    }
    update() {
    }
}