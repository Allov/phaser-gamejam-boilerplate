export function font(settings) {
    return Object.assign({}, { font: '45px Courier New', fill: '#fff', align: 'center' }, settings);
}

export function text(game, text, x, y, settings) {
    const t = game.add.text(x, y, text, font(settings));
    t.anchor.x = 0.5;
    return t;
}

// Extensions methods
Math.rnd = (i, j) => {
    return Math.floor(Math.random() * j) + i;
}

Math.chanceRoll = (chance) => {
    if (chance === undefined) { chance = 50; }
    return chance > 0 && (Math.random() * 100 <= chance);
}

Number.prototype.pad = function (size, c) {
    let s = String(this);
    while (s.length < (size || 2)) {
        s = (c || ' ') + s;
    }

    return s;
}
