class Block extends Drawable {
    constructor(){
        super()
        this.width = 100
        this.height = 100
        this.x = Math.random() * (this.maxX() - this.width)
        this.y = Math.random() * (this.maxY() - this.height)
        this.style = "#9BD"
        this.image = Images.BLOCK
    }
}