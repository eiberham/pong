if (global === undefined) {
	var global = window;
}

import 'phaser';
import './styles.scss';
import config from './config';
import BootScene from './scene/BootScene';
import PreloaderScene from './scene/PreloaderScene';
import GameScene from './scene/GameScene';
 
// eslint-disable-next-line no-undef
class Game extends Phaser.Game {
	constructor (config) {
		super(config);
		this.globals = {
			cursors:    null,
			paddle:     null,
			ball:       null,
			score:      null,
			points:     0,
			velx: 0,
			vely: 0
		};
		this.scene.add('Boot', BootScene);
		this.scene.add('Preloader', PreloaderScene);
		this.scene.add('Game', GameScene);
		this.scene.start('Game');
	}
}
 
window.game = new Game(config);


/* const game = new Phaser.Game(config);
let cursors, paddle, ball, scoreText, scoreCount;
let velX = 800, velY = 800; */
