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
