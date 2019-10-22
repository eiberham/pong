import "phaser";

const config = {
    title: "Pong game",
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
let cursors, paddle, ball;

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

    //platforms = this.physics.add.staticGroup();
    
    paddle = this.physics.add.sprite(10, (config.height / 2) - (150 / 2), 'paddle');
    paddle.body.setAllowGravity(false);
    paddle.setBounce(0.2);
    paddle.setCollideWorldBounds(true);
    paddle.displayHeight = 150;
    paddle.displayWidth  = 40;

    cursors = this.input.keyboard.createCursorKeys();

    ball = this.physics.add.sprite(0, 0, 'ball');
    ball.displayWidth = 50;
    ball.displayHeight = 50;
    ball.setBounce(0.8);
    ball.setCollideWorldBounds(true);

    //this.physics.enable(paddle, Phaser.Physics.ARCADE);

    /* pleft.width  = 50;
    pleft.height = 100; */

    //game.load.image(360, 150, 'paddle');
    /* pright.width  = 50;
    pright.height = 100; */
}

function update (){
    if (cursors.up.isDown){
        paddle.setVelocityY(-160);
        //paddle.anims.play('left', true);
    }
    else if (cursors.down.isDown){
        paddle.setVelocityY(160);
        //player.anims.play('right', true);
    }
}