import { text } from 'helpers/Helpers';

export default class MenuState extends Phaser.State {
    create() {
        this.gameTitle = text(this.game, 'game\njam', this.game.world.centerX, this.game.world.centerY - 200, { font: '60px Courier New', fill: '#ffba00' });

        this.playButton = text(this.game, 'play', this.game.world.centerX, this.game.world.centerY, { fill: '#ccc' });
        this.playButton.inputEnabled = true;
        this.playButton.events.onInputUp.add(this.startGame, this);

        // fade in effect
        this.game.stage.children.forEach((c) => {
            c.alpha = 0;
            this.game.add.tween(c).to({ alpha: 1 }, 1000, null, true);
        });
    }

    startGame() {
        this.gameTitle.kill();
        this.playButton.kill();

        this.game.state.start('GameState');
    }
}
