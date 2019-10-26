/* eslint-disable no-undef */
import 'phaser';

export default {
	title: 'Squash game',
	parent: 'root',
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 300 },
			debug: false
		}
	}
};