// Move the shots every N milliseconds
let shotsMover = setInterval(moveShots, 10)

function moveShots() {
    for (let i = 0; i < level.shots.length; i++) {
        let shot = level.shots[i]
        shot.move(shot.direction, 5)
        let shotPosition = getShotPosition(shot)
        if (shotPosition == Positions.FLOATING) continue;
        else if (shotPosition == Positions.IN_PLAYER) {
            level.damagePlayer()
            level.shots.splice(i, 1)
            i++
            continue
        }
        else level.shots.splice(i, 1)
        i--
    }
}

function getShotPosition(shot) {
    if (!shot.inCanvas())
        return Positions.OUT_OF_CANVAS
    else if (shot.contains(level.player) && shot.source instanceof Boss)
        return Positions.IN_PLAYER
    for (let i = 0; i < level.blocks.length; i++)
        if (shot.contains(level.blocks[i]))
            return Positions.IN_BLOCK
    for (let i = 0; i < level.minions.length; i++)
        if (shot.contains(level.minions[i]) && shot.source instanceof Player) {
            level.killMinion(i)
            return Positions.IN_MINION
        }
    for (let i = 0; i < level.bosses.length; i++)
        if (shot.contains(level.bosses[i]) && shot.source instanceof Player) {
            level.damageBoss(i)
            return Positions.IN_BOSS
        }
    return Positions.FLOATING
}
