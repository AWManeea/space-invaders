// Give the player moving and shooting abilities (key down listener)
window.addEventListener("keydown", e => {
    var key = e.code || e.keyCode; // See https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
    if (key == Keys.ARROW_RIGHT || key == Keys.ARROW_RIGHT_CODE)
        level.player.move(Directions.EAST)
    else if (key == Keys.ARROW_LEFT || key == Keys.ARROW_LEFT_CODE)
        level.player.move(Directions.WEST)
    else if ((key == Keys.ARROW_UP || key == Keys.ARROW_UP_CODE) && canMoveVertically)
        level.player.move(Directions.NORTH)
    else if ((key == Keys.ARROW_DOWN || key == Keys.ARROW_DOWN_CODE) && canMoveVertically)
        level.player.move(Directions.SOUTH)
    else if (key == Keys.RETURN || key == Keys.RETURN_CODE || key == Keys.SPACE || key == Keys.SPACE_CODE) {
        level.shots.push(level.player.shoot())
    }
})