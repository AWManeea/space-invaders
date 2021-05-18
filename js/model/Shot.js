class Shot extends Movable {
    constructor(source, direction) {
        super()
        this.source = source
        this.direction = direction
        this.width = 11 * 3
        this.height = 15 * 3
        this.x = this.source.x + this.source.width / 2 - this.width / 2
        this.y = this.source.y + this.source.height / 2 - this.height / 2
        this.style = "#F15"
        if (source instanceof Boss) {
            switch (direction) {
                case Directions.NORTH: this.image= Images.BOSS_SHOT_UP; break;
                case Directions.SOUTH: this.image = Images.BOSS_SHOT_DOWN; break;
                case Directions.EAST: this.image = Images.BOSS_SHOT_RIGHT; this.flipWidthHeight(); break;
                case Directions.WEST: this.image = Images.BOSS_SHOT_LEFT; this.flipWidthHeight(); break;
                default: this.image= Images.BOSS_SHOT_UP; break;
            }

        } else if (source instanceof Player) {
            this.image = Images.PLAYER_SHOT
            this.width = 10
            this.height = 50
        }
    }

    flipWidthHeight() {
        let tmp = this.width
        this.width = this.height
        this.height = tmp
    }
}