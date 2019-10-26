import 'phaser';
 
// eslint-disable-next-line no-undef
export default class GameScene extends Phaser.Scene {
	constructor () {
		super('Game');
	}
 
	preload () {
		this.load.image('playground', './assets/images/playground.png');
		this.load.image('paddle', './assets/images/paddle.png');
		this.load.image('ball', './assets/images/ball.png');
	}
 
	create (){
		this.add.image(400, 300, 'playground');
		this.velx = 800;
		this.vely = 800;
		this.points = 0;
		this.score = this.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#FFF' });
        
		this.paddle = this.physics.add.sprite(25, (600 / 2) - (150 / 2), 'paddle');
		this.paddle.body.setAllowGravity(false);
		this.paddle.setBounce(0.2);
		this.paddle.setCollideWorldBounds(true);
		this.paddle.displayHeight = 150;
		this.paddle.displayWidth  = 40;

		this.cursors = this.input.keyboard.createCursorKeys();

		this.ball = this.physics.add.sprite(0, 0, 'ball');
		this.ball.displayWidth = 50;
		this.ball.displayHeight = 50;
		this.ball.setBounce(1);
		this.ball.setCollideWorldBounds(true);
		this.ball.body.damping = 0;
		this.ball.setVelocity(800, 800);

		this.physics.add.collider(this.ball, this.paddle, this.hit, null, this);
	}

	update (){
		if (this.cursors.up.isDown){
			this.paddle.setVelocityY(-860);
		}
		else if (this.cursors.down.isDown){
			this.paddle.setVelocityY(860);
		}

		if(this.ball.x <= 30){
			if(this.points >= 0){
				this.points -= 1;
				this.score.setText(`Score: ${this.points}`);
			}

			//reset();
		}
	}

	hit(ball, paddle){
		this.points += 1;
		this.score.setText(`Score: ${this.points}`);
	
		this.velx = this.velx + 50;
		this.velx = this.velx * -1;
		
		ball.setVelocityX(this.velx*-1);
	
		if( this.vely < 0 ){
			this.vely = this.vely*-1;
			ball.setVelocityY(this.vely);
		}
	
		paddle.setVelocityX(-1); 
	}
}