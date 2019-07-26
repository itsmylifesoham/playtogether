"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.start = function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    };
    App.prototype.onDeviceReady = function () {
        console.log("device is ready!!");
        var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create });
        function preload() {
            game.load.image('logo', 'assets/images/phaser.png');
        }
        function create() {
            var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
            logo.anchor.setTo(0.5, 0.5);
        }
    };
    return App;
}());
new App().start();
//# sourceMappingURL=app.js.map