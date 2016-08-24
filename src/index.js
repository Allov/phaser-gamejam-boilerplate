import GameState from 'states/GameState';
import LoadingState from 'states/LoadingState';
import MenuState from 'states/MenuState';
import 'helpers/Helpers';

class Game extends Phaser.Game {

    constructor() {
        super(412, 732, Phaser.AUTO, 'content', null);

        this.state.add('LoadingState', LoadingState, false);
        this.state.add('MenuState', MenuState, false);
        this.state.add('GameState', GameState, false);

        this.state.start('LoadingState');
    }

}

new Game();
