import * as SFS2X from 'sfs2x-api';

class App {
    public start() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    }

    private onDeviceReady() {
        console.log("device is ready!!");

        var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create });

        function preload() {
            game.load.image('logo', 'assets/images/phaser.png');
        }

        function create() {
            var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
            logo.anchor.setTo(0.5, 0.5);
        }
    }
}

new App().start();



