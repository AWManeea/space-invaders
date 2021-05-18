class Minion extends Movable {
    constructor() {
        super()
        this.x = Math.round(Math.random() * this.maxX())
        this.y = this.minY()
        this.width = 80
        this.height = 68
        this.style = "#444"
        let images = [
            Images.GREEN_MINION,
            Images.CYAN_MINION,
            Images.ORANGE_MINION,
            Images.PINK_MINION,
            Images.PURPLE_MINION,
            Images.RED_MINION,
            Images.YELLOW_MINION,
        ]
        this.image = images[randomInt(0, images.length)]
    }
}