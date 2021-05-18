class Player extends Shooter {
    constructor(health) {
        super()
        this.width = 100
        this.height = 100
        this.x = (this.minX() + this.maxX()) / 2
        this.y = this.maxY()
        this.health = health
        this.damageShield = null
        this.damageColorShift = null
    }

    damage() {
        if (!this.damageShield) {
            this.style = "#F61"
            this.damageColorShif = setInterval(()=>this.style=this.style=="#F61"?"#F15":"#F61", 150)
            this.damageShield = setInterval(() => {
                clearInterval(this.damageShield)
                clearInterval(this.damageColorShif)
                this.style = "#FFF"
                this.damageShield = null
            }, 1000)
            return --this.health
        }
        return this.health

    }

    shoot = () => super.shoot(Directions.NORTH)
    fixPosition = () => this.y = this.maxY()

}