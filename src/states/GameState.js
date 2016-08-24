import ColoredText from 'objects/ColoredText';

class GameState extends Phaser.State {

    create() {
        let center = { x: this.game.world.centerX, y: this.game.world.centerY }
        let text = new ColoredText(this.game, center.x, center.y, '{#ff0}helloWorld{#fff}(){#aaa};', { font: '24px Courier New'});
        text.anchor.set(0.5);
    }

}

export default GameState;
