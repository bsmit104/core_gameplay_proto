class Title extends Phaser.Scene {
    constructor() {
        super('title');
    }
    preload() {
        this.load.path = "./assets/";
        this.load.image('title', 'title.png');
    }
    create() {
        this.cameras.main.setBackgroundColor('#1D4625');

        const centerX = this.cameras.main.width / 2;
        const centerY = this.cameras.main.height / 2;

        this.title = this.add.image(centerX, centerY - 100, 'title');
        this.title.setScale(3);

        const playText = this.add.text(centerX - 150, centerY + 300, 'PLAY', { fontSize: '80px', fill: '#fff' });
        //playText.setDepth(1);
        playText.setInteractive();
        playText.on('pointerover', () => {
            playText.setStyle({ fill: '#ff0' });
        });
        playText.on('pointerout', () => {
            playText.setStyle({ fill: '#fff' });
        });
        playText.on('pointerdown', () => {
            this.scene.start('map');
        });
        this.tweens.add({
            targets: this.title,
            x: '+=' + 100,
            repeat: 2,
            yoyo: true,
            ease: 'Sine.inOut',
            duration: 100
        });
        // const space = this.add.image(200, 0, 'space');
        // //space.scale(.5);
        // space.setOrigin(0);
        // space.setDepth(0);

        // this.imageObject.background = this.back;
    }
}

class Map extends Phaser.Scene {
    constructor() {
        super('map');
    }
    preload() {
        this.load.path = "./assets/";
        this.load.image('lev1', 'lev1.png')
        this.load.image('lev2', 'lev2.png')
        this.load.image('lev3', 'lev3.png')
    }
    create() {

        const centerX = this.cameras.main.width / 2;
        const centerY = this.cameras.main.height / 2;
        previousScene = this.scene.key;

        this.cameras.main.setBackgroundColor('#536872');

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
        .setInteractive()
        .on('pointerover', () => this.lev2.setAlpha(0.4))
        .on('pointerout', () => this.lev2.setAlpha(1))
        .on('pointerdown', () => {
            this.scene.start('level2')
        });

        this.lev3 = this.add.image(centerX + 500, centerY, 'lev3')
        this.lev3.setScale(4)
        .setInteractive()
        .on('pointerover', () => this.lev3.setAlpha(0.4))
        .on('pointerout', () => this.lev3.setAlpha(1))
        .on('pointerdown', () => {
            this.scene.start('level3')
        });
    }
}


class Settings extends Phaser.Scene {
    constructor() {
        super('settings');
    }
    preload() {
        this.load.path = "./assets/";
        this.load.image('resume', 'resume.png');
        this.load.image('audioon', 'audio_on.png');
        this.load.image('audiooff', 'audio_off.png');
    }
    create() {
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
        });

        this.audiooff = this.add.image(centerX + 200, centerY, 'audiooff')
        this.audiooff.setScale(3)
        .setInteractive()
        .on('pointerover', () => this.audiooff.setAlpha(0.4))
        .on('pointerout', () => this.audiooff.setAlpha(1))
        .on('pointerdown', () => {
            ////////////////music off///////////////
        });
    }
}

class Pause extends Phaser.Scene {
    constructor() {
        super('pause');
    }
    preload() {
        this.load.path = "./assets/";
        this.load.image('resume', 'resume.png');
        this.load.image('settings', 'settings.png');
        this.load.image('quit', 'quit.png');
        this.load.image('mapbut', 'mapbut.png');
    }
    create() {
        this.cameras.main.setBackgroundColor('#36454f');
        this.textObject0 = this.add.text(
            50, //x
            50,//y
            "pause", //text
            {
                font: "20px Impact",
                color: "#FFFFFF",
                align: "center"
            } //style
        );

        //this.resume = this.add.image(390, 260, 'resume')
        //.setInteractive()
        //.on('pointerdown', () => {
        //    this.scene.start(previousScene);
        //});
        //this.resume.setScale(.8)
//
        ////////////////////add audio scene///////////////////
        //this.settings = this.add.image(330, 170, 'settings')
        //.setInteractive()
        //.on('pointerdown', () => {
        //    this.scene.start('settings');
        //});
//
        //this.quit = this.add.image(250, 260, 'quit')
        //.setInteractive()
        //.on('pointerdown', () => {
        //    this.scene.start('title');
        //});
        //this.quit.setScale(.8)
//
        //this.mapbut = this.add.image(300, 350, 'mapbut')
        //.setInteractive()
        //.on('pointerdown', () => {
        //    this.scene.start('map');
        //});
        //this.quit.setScale(.8)
        const centerX = this.cameras.main.width / 2;
        const centerY = this.cameras.main.height / 2;

        this.resume = this.add.image(centerX + 900, centerY - 500, 'resume')
        .setInteractive()
        .on('pointerover', () => this.resume.setAlpha(0.4))
        .on('pointerout', () => this.resume.setAlpha(1))
        .on('pointerdown', () => {
            this.scene.start(previousScene);
        });
        this.resume.setScale(.8)

        //////////////////add audio scene///////////////////
        this.settings = this.add.image(centerX, centerY + 300, 'settings')
        this.settings.setScale(3)
        .setInteractive()
        .on('pointerover', () => this.settings.setAlpha(0.4))
        .on('pointerout', () => this.settings.setAlpha(1))
        .on('pointerdown', () => {
            this.scene.start('settings');
        });

        this.quit = this.add.image(centerX, centerY, 'quit')
        this.quit.setScale(3)
        .setInteractive()
        .on('pointerover', () => this.quit.setAlpha(0.4))
        .on('pointerout', () => this.quit.setAlpha(1))
        .on('pointerdown', () => {
            this.scene.start('title');
        });

        this.mapbut = this.add.image(centerX, centerY - 300, 'mapbut')
        this.mapbut.setScale(3)
        .setInteractive()
        .on('pointerover', () => this.mapbut.setAlpha(0.4))
        .on('pointerout', () => this.mapbut.setAlpha(1))
        .on('pointerdown', () => {
            this.scene.start('map');
        });
    }
}

// class Level1 extends Phaser.Scene {
//     constructor() {
//         super('level1');
//     }
//     preload() {
//         this.load.path = "./assets/";
//         this.load.image('pause', 'pause.png');
//     }
//     create() {
//         previousScene = this.scene.key;

//         this.cameras.main.setBackgroundColor('#1D4625');

//         this.pause = this.add.image(570, 50, 'pause')
//         .setInteractive()
//         .on('pointerover', () => this.pause.setAlpha(0.4))
//         .on('pointerout', () => this.pause.setAlpha(1))
//         .on('pointerdown', () => {
//             this.scene.start('pause')
//         });
//         this.pause.setScale(.5);


//         this.textObject0 = this.add.text(
//             100, //x
//             250,//y
//             "level1", //text
//             {
//                 font: "50px Impact",
//                 color: "#FFFFFF",
//                 align: "center"
//             } //style
//         );
//     }
// }

// class Level2 extends Phaser.Scene {
//     constructor() {
//         super('level2');
//     }
//     preload() {
//         this.load.path = "./assets/";
//         this.load.image('pause', 'pause.png');
//     }
//     create() {
//         this.pause = this.add.image(570, 50, 'pause')
//         .setInteractive()
//         .on('pointerover', () => this.pause.setAlpha(0.4))
//         .on('pointerout', () => this.pause.setAlpha(1))
//         .on('pointerdown', () => {
//             this.scene.start('pause')
//         });
//         this.pause.setScale(.5);

//         previousScene = this.scene.key;

//         this.cameras.main.setBackgroundColor('#1D4625');
//         this.textObject0 = this.add.text(
//             100, //x
//             250,//y
//             "Level2", //text
//             {
//                 font: "50px Impact",
//                 color: "#FFFFFF",
//                 align: "center"
//             } //style
//         );
//     }

//     //this.input.on('pointerdown', () => this.scene.start('messagecard'));
// }

// class Level3 extends Phaser.Scene {
//     constructor() {
//         super('level3');
//     }
//     preload() {
//         this.load.path = "./assets/";
//         this.load.image('pause', 'pause.png');
//     }
//     create() {
//         this.pause = this.add.image(570, 50, 'pause')
//         .setInteractive()
//         .on('pointerover', () => this.pause.setAlpha(0.4))
//         .on('pointerout', () => this.pause.setAlpha(1))
//         .on('pointerdown', () => {
//             this.scene.start('pause')
//         });
//         this.pause.setScale(.5);


//         previousScene = this.scene.key;

//         this.cameras.main.setBackgroundColor('#1D4625');
//         this.textObject0 = this.add.text(
//             100, //x
//             250,//y
//             "Level3", //text
//             {
//                 font: "50px Impact",
//                 color: "#FFFFFF",
//                 align: "center"
//             } //style
//         );
//     }

// }
class Beg extends Phaser.Scene {
    constructor() {
        super('Beg');
    }
    preload(){

    }
    create(){
        const centerX = this.cameras.main.width / 2;
        const centerY = this.cameras.main.height / 2;

        this.add.text(centerX - 700, centerY - 200, "Brayden Smith, Aly Cerutti,\nAaron Lee, Akash Basu,\nand Connor Green\npresent").setFontSize(80);
        // this.add.text(200, 100, "Aly Cerutti,").setFontSize(30);
        // this.add.text(210, 150, "Aaron Lee,").setFontSize(30);
        // this.add.text(205, 200, "Akash Basu,").setFontSize(30);
        // this.add.text(150, 250, "and Connor Green").setFontSize(30);
        // this.add.text(250, 300, "present").setFontSize(20);
        this.input.on('pointerdown', () => this.scene.start('title'));
        this.cameras.main.fadeIn(5000);
        this.time.addEvent({
            delay: 8000, 
            loop:false,
            callback: () => {
                this.scene.start("title")
            }
        })
    }
    update(){
    }
}