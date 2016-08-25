import ColoredText from 'objects/ColoredText';

Phaser.GameObjectFactory.prototype.t = function(x, y, text, style, group) {
    if (!group) { group = this.world; }
    const s = Object.assign({}, {
        fill: '#fff',
        align: 'center'
    }, style);

    s.font = s.font || `${s.bold ? 'bold' : ''} ${s.size || '36px'} ${s.face || 'Courier New'}`;

    if (!group) { group = this.world; }
    const t = group.add(new ColoredText(this.game, x, y, text, s));
    t.anchor.x = 0.5;

    return t;
}
