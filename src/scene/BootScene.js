import 'phaser';
 
// eslint-disable-next-line no-undef
export default class BootScene extends Phaser.Scene {
	constructor () {
		super('Boot');
	}
 
	preload () {}
 
	create () {
		this.scene.start('Preloader');
	}
}