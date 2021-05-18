class Drawable {
    x = 0
    y = 0
    width = 0
    height = 0
    style = "#FFFFFF"
    image = null

    minX = () => 10;
    maxX = () => innerWidth - 10 - this.width;
    minY = () => 10;
    maxY = () => innerHeight - (innerHeight * (1 - screenHeightPercentage)) - 10 - this.height;
    midX = () => (this.x * 2 + this.width) / 2;
    midY = () => (this.y * 2 + this.height) / 2;
    betweenX = someX => someX > this.x && someX < this.x + this.width
    betweenY = someY => someY > this.y && someY < this.y + this.height
    inCanvas = () => this.x > this.minX() && this.x < this.maxX() && this.y > this.minY() && this.y < this.maxY()

    // This is art, not code:
    contains(drawable, bothWays = true) {
        return (
            ((drawable.betweenX(this.x)) || (drawable.betweenX(this.x + this.width))) &&
            ((drawable.betweenY(this.y)) || (drawable.betweenY(this.y + this.height)))) ||
            (bothWays ? drawable.contains(this, false) : false)
    }
}