class Shooter extends Movable {
    shoot(direction) {
        return direction == Directions.ALL ?
            [
                new Shot(this, Directions.NORTH),
                new Shot(this, Directions.NORTH_EAST),
                new Shot(this, Directions.EAST),
                new Shot(this, Directions.SOUTH_EAST),
                new Shot(this, Directions.SOUTH),
                new Shot(this, Directions.SOUTH_WEST),
                new Shot(this, Directions.WEST),
                new Shot(this, Directions.NORTH_WEST),
            ] : new Shot(this, direction)
    }
}