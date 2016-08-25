export default class MenuState extends Phaser.State {
    create() {
        this.gameTitle = this.game.add.t(this.game.world.centerX, this.game.world.centerY - 200, 'game\njam', { size: '60px', fill: '#ffba00' });

        this.playButton = this.game.add.t(this.game.world.centerX, this.game.world.centerY, 'play', { fill: '#ccc' });
        this.playButton.inputEnabled = true;
        this.playButton.events.onInputUp.add(this.startGame, this);

        // fade in effect
        this.game.world.alpha = 0;
        this.game.add.tween(this.game.world).to({ alpha: 1 }, 1000, null, true);
    }

    startGame() {
        this.game.state.start('GameState');
    }
}
