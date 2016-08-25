// example:
// let center = { x: this.game.world.centerX, y: this.game.world.centerY }
// let text = new ColoredText(this.game, center.x, center.y, '- ph{#ff0000}aser -\nwith a spr{#00ff00}inkle of\nco{#0000ff}lors', { font: '45px Arial', fill: '#ffffff', align: 'center' });

const PATTERN = /\{(.*?)\}/g;
export default class ColoredText extends Phaser.Text {
    set coloredText(text) {
        this.unparsedText = text.replace(/\n/g, '');
        this.text = text.replace(PATTERN, '');

        this.parseColorFromText();
    }

    constructor(game, x, y, text, style) {
        super(game, x, y, text, style);

        this.coloredText = text;
    }

    parseColorFromText() {
        let match = null;
        let i = 0;
        while (match = PATTERN.exec(this.unparsedText)) { // eslint-disable-line no-cond-assign
            this.addColor(match[1], match.index - (i * match[0].length));
            i++;
        }
    }
}
