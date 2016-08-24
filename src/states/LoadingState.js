export default class LoadingState extends Phaser.State {
    start() {
        // Put anything that can be loaded up front here...
        // this.game.load.audio('my_audio', 'my_audio.ogg');

        this.game.load.start();
    }

    create() {
        this.game.stage.backgroundColor = 0x484878;

        this.status = this.game.add.text(this.game.world.centerX, this.game.world.centerY, 'loading', { font: '36px Courier New', fill: '#fff' });
        this.status.anchor.x = 0.5;

        this.percent = this.game.add.text(this.game.world.centerX, this.game.world.centerY + 40, '000', { font: '18px Courier New', fill: '#ff0' });
        this.percent.anchor.x = 0.5;

        this.game.load.onLoadStart.add(this.loadStart, this);
        this.game.load.onFileComplete.add(this.fileComplete, this);
        this.game.load.onLoadComplete.add(this.loadComplete, this);

        this.start();
    }

    loadStart() {
    }

    fileComplete(progress /*, cacheKey, success, totalLoaded, totalFiles*/) {
        this.percent.text = `${progress.pad(3, '0')}`;
    }

    loadComplete() {
        this.status.text = 'ready';
        this.game.add.tween(this.status).to({ alpha: 0 }, 1000, null, true);

        const ready = this.game.add.tween(this.percent).to({ alpha: 0 }, 1500, Phaser.Easing.Bounce.Out, true);
        this.game.add.tween(this.percent.scale).to({ x: 1.2, y: 1.2 }, 500, Phaser.Easing.Bounce.Out, true);

        const colorBlend = { step: 0 };
        const bg = this.game.stage.backgroundColor;
        this.game.add.tween(colorBlend).to({ step: 100 }, 500, Phaser.Easing.Bounce.Out, true)
            .onUpdateCallback(() => {
                this.game.stage.backgroundColor = Phaser.Color.interpolateColor(bg, 0x000000, 100, colorBlend.step, 1);
            });

        ready.onComplete.add(this.cleanupAndStart, this);
    }

    cleanupAndStart() {
        this.status.kill();
        this.percent.kill();

        this.game.state.start('MenuState');
    }
}
