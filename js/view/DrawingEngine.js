let canvas = document.getElementById("canvas")

let context = canvas.getContext('2d');

// When the window size changes, change the canvas size accordingly and re-position the player.
window.addEventListener("resize", e => {
    changeElementSize(canvas, window.innerWidth, window.innerHeight - window.innerHeight * (1 - screenHeightPercentage))
    level.blocks = []
    level.createBlocks(level.blocksCount)
    level.player.fixPosition()
})
changeElementSize(canvas, window.innerWidth, window.innerHeight - window.innerHeight * (1 - screenHeightPercentage))


function redraw() {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    drawLevel()
    window.requestAnimationFrame(redraw)
}

function drawLevel() {
    if (level.player.y > level.player.maxY()) level.player.y = level.player.maxY()
    level.minions.forEach(minion => drawShape(minion));
    level.shots.forEach(shot => drawShape(shot));
    level.bosses.forEach(boss => drawShape(boss));
    level.blocks.forEach(block => drawShape(block));
    drawShape(level.player)
    drawText(`Score: ${level.score}`, 48, 10, 60)
    drawText(`Health: ${level.player.health}`, 30, 10, 120)
    level.bosses.forEach(boss => drawText(`Boss Health: ${boss.health}`, 24, 10, 150))
}

function drawShape(drawable) {
    context.beginPath();
    context.fillStyle = drawable.style
    if(drawable.image==null) context.rect(drawable.x, drawable.y, drawable.width, drawable.height)
    else context.drawImage(drawable.image,drawable.x, drawable.y, drawable.width, drawable.height)
    context.fill();
}

function drawText(text, fontSize, x, y) {
    context.beginPath();
    context.font = `${fontSize}px Inter`;
    context.fillStyle = "#CCC";
    context.fillText(text, x, y);
}

window.requestAnimationFrame(redraw)