class Movable extends Drawable {
    // This is art, not code:
    move(direction, magnitude = 50) {
        if(direction==Directions.ANY){
            this.x=this.x + randomInt(0,100)%2==0?Math.random()*magnitude:-Math.random()*magnitude
            this.y=this.y + randomInt(0,100)%2==0?Math.random()*magnitude:-Math.random()*magnitude
        }
        if (direction & Directions.NORTH) this.y = Math.max(this.minY(), this.y - magnitude)
        else if (direction & Directions.SOUTH) this.y = Math.min(this.maxY(), this.y + magnitude)
        if (direction & Directions.WEST) this.x = Math.max(this.minX(), this.x - magnitude)
        else if (direction & Directions.EAST) this.x = Math.min(this.maxX(), this.x + magnitude)
    }
}