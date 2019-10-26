import 'phaser';
 
// eslint-disable-next-line no-undef
export default class PreloaderScene extends Phaser.Scene {
	constructor () {
		super('Preloader');
	}
 
	preload () {
		
	}
 
	create () {
		this.scene.start('Game');
	}

	
	init () {}
    
	ready () {}
}