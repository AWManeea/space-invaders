function toggleMovementControl() {
    canMoveVertically = !canMoveVertically
    img = document.getElementById("movement-controller")
    if (img.src.match("/assets/free-move.svg")) img.src = "/assets/horizontal-move.svg"
    else img.src = "/assets/free-move.svg"
}

function toggleFulLScreen() {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen();
    else if (document.exitFullscreen) document.exitFullscreen();

}