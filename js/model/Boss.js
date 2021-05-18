class Boss extends Shooter {
    constructor(health) {
        super()
        this.health = health
        this.x = Math.round(Math.random() * this.maxX())
        this.y = this.minY()
        this.width = 150
        this.height = 150
        this.health = 20
        this.style = "#844"
        this.direction = Directions.SOUTH_EAST
        this.damageShield=null
    }

    // This is art, not code:
    move(magnitude = 5) {
        this.x += this.direction & Directions.EAST ? randomInt(0, magnitude) : -randomInt(0, magnitude)
        this.y += this.direction & Directions.SOUTH ? randomInt(0, magnitude) : -randomInt(0, magnitude)
        if (this.x >= this.maxX()) this.direction = (this.direction & 0x0F) | 0x20
        else if (this.x <= this.minX()) this.direction = (this.direction & 0x0F) | 0x10
        else if (randomInt(0, 100) == 50) this.direction = this.direction ^ 0x30
        if (this.y >= this.maxY()) this.direction = (this.direction & 0xF0) | 0x01
        else if (this.y <= this.minY()) this.direction = (this.direction & 0xF0) | 0x02
        else if (randomInt(0, 100) == 50) this.direction = this.direction ^ 0x03
    }


    damage(){
        if (!this.damageShield) {
            this.style = "#F00"
            this.damageShield = setInterval(() => {
                clearInterval(this.damageShield)
                this.style = "#844"
                this.damageShield = null
            }, 100)
            return --this.health
        }
        return health
    }
    shoot = () => super.shoot(Directions.ALL)

}