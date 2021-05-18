const Keys = {
    RETURN_CODE: 0x0D,
    SPACE_CODE: 0x20,
    ARROW_LEFT_CODE: 0x25,
    ARROW_UP_CODE: 0x26,
    ARROW_RIGHT_CODE: 0x27,
    ARROW_DOWN_CODE: 0x28,
    RETURN: "Enter",
    SPACE: "Space",
    ARROW_LEFT: "ArrowLeft",
    ARROW_UP: "ArrowUp",
    ARROW_RIGHT: "ArrowRight",
    ARROW_DOWN: "ArrowDown",
}

const Directions = {
    ANY: 0x00,
    NORTH: 0x01,
    NORTH_EAST: 0x11,
    EAST: 0x10,
    SOUTH_EAST: 0x12,
    SOUTH: 0x02,
    SOUTH_WEST: 0x22,
    WEST: 0x20,
    NORTH_WEST: 0x21,
    ALL: 0xFF
}

const Positions = {
    FLOATING: 0x00,
    OUT_OF_CANVAS: 0x01,
    IN_PLAYER: 0x02,
    IN_BLOCK: 0x04,
    IN_MINION: 0x08,
    IN_BOSS: 0x10
}

const Images = {
    BOSS_SHOT_UP: new Image,
    BOSS_SHOT_DOWN: new Image,
    BOSS_SHOT_LEFT: new Image,
    BOSS_SHOT_RIGHT: new Image,
    PLAYER_SHOT: new Image,
    BLOCK: new Image,
    GREEN_MINION: new Image,
    CYAN_MINION: new Image,
    ORANGE_MINION: new Image,
    PINK_MINION: new Image,
    PURPLE_MINION: new Image,
    RED_MINION: new Image,
    YELLOW_MINION: new Image,
} 

Images.BOSS_SHOT_UP.src = "assets/boss-shot-up.png"
Images.BOSS_SHOT_DOWN.src = "assets/boss-shot-down.png"
Images.BOSS_SHOT_LEFT.src = "assets/boss-shot-left.png"
Images.BOSS_SHOT_RIGHT.src = "assets/boss-shot-right.png"
Images.PLAYER_SHOT.src = "assets/player-shot.png"
Images.BLOCK.src = "assets/block.png"
Images.GREEN_MINION.src = "assets/green-minion.png"
Images.CYAN_MINION.src = "assets/cyan-minion.png"
Images.ORANGE_MINION.src = "assets/orange-minion.png"
Images.PINK_MINION.src = "assets/pink-minion.png"
Images.PURPLE_MINION.src = "assets/purple-minion.png"
Images.RED_MINION.src = "assets/red-minion.png"
Images.YELLOW_MINION.src = "assets/yellow-minion.png"