class GameState extends Phaser.State {
    create() {
        this.game.add.t(this.game.world.centerX, this.game.world.centerY, '{#ff0}helloWorld{#fff}(){#aaa};', { font: '24px Courier New'});
    }
}

export default GameState;
