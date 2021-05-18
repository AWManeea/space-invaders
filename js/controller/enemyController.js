const createMinion = () => level.minions.push(new Minion())

function moveMinions() {
    for (let i = 0; i < level.minions.length; i++) {
        let minion = level.minions[i]
        minion.move(Directions.SOUTH, 3)
        let minionPosition = getMinionPosition(minion)
        if (minionPosition == Positions.FLOATING) continue;
        else if (minionPosition == Positions.OUT_OF_CANVAS) level.minions.splice(i, 1)
        else if (minionPosition == Positions.IN_BLOCK) level.minions.splice(i, 1)
        else if (minionPosition == Positions.IN_PLAYER) level.damagePlayer()
        i--
    }
}

function getMinionPosition(minion) {
    if (!minion.inCanvas()) return Positions.OUT_OF_CANVAS
    else if (minion.contains(level.player)) return Positions.IN_PLAYER
    for (let i = 0; i < level.blocks.length; i++)
        if (minion.contains(level.blocks[i]))
            return Positions.IN_BLOCK
    return Positions.FLOATING
}

function moveBosses() {
    for (let i = 0; i < level.bosses.length; i++) {
        let boss = level.bosses[i]
        boss.move()
        if(boss.contains(level.player)) level.damagePlayer()
    }
}

function bossesShoot() {
    level.bosses.forEach(boss => {
        let bossShots = boss.shoot()
        bossShots.forEach(shot => level.shots.push(shot));
    });
}

let minionsCreator = setInterval(createMinion, 1000 / minionsPerSecond)
let minionsMover = setInterval(moveMinions, 10);
let bossesMover = setInterval(moveBosses, 10)
let bossesShooter = setInterval(bossesShoot, 3000)
