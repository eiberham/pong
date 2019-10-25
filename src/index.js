import "phaser";
import "./styles.scss";

const config = {
    title: "Squash game",
    parent: "root",
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);
let cursors, paddle, ball, scoreText, scoreCount;
let velX = 800, velY = 800;

function preload (){
    this.load.image("playground", "./assets/images/playground.png");
    this.load.image("paddle", "./assets/images/paddle.png");
    this.load.image("ball", "./assets/images/ball.png");
}

function create (){
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.scale.refresh();
    
    this.add.image(400, 300, "playground");
    scoreCount = 0;
    scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#FFF' });
    
    paddle = this.physics.add.sprite(25, (config.height / 2) - (150 / 2), 'paddle');
    paddle.body.setAllowGravity(false);
    paddle.setBounce(0.2);
    paddle.setCollideWorldBounds(true);
    paddle.displayHeight = 150;
    paddle.displayWidth  = 40;

    cursors = this.input.keyboard.createCursorKeys();

    ball = this.physics.add.sprite(0, 0, 'ball');
    ball.displayWidth = 50;
    ball.displayHeight = 50;
    ball.setBounce(1);
    ball.setCollideWorldBounds(true);
    ball.body.damping = 0;
    ball.setVelocity(velX, velY);

    this.physics.add.collider(ball, paddle, hitPaddle, null, this);
}

function update (){

    if (cursors.up.isDown){
        paddle.setVelocityY(-860);
    }
    else if (cursors.down.isDown){
        paddle.setVelocityY(860);
    }

    if(ball.x <= 30){
        if(scoreCount >= 0){
            scoreCount -= 1;
            scoreText.setText('Score: ' + scoreCount);
        }

        //reset();
    }
}

function hitPaddle(ball, paddle){
    scoreCount += 1;
    scoreText.setText('Score: ' + scoreCount);

    velX = velX + 50;
    velX = velX * -1;
    
    ball.setVelocityX(velX);

    if( velY < 0 ){
        velY = velY*-1
        ball.setVelocityY(velY);
    }

    paddle.setVelocityX(-1);
}