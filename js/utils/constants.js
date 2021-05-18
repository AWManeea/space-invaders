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
    BOSS_SHOT_UP: "/assets/boss-shot-up.png",
    BOSS_SHOT_DOWN: "/assets/boss-shot-down.png",
    BOSS_SHOT_LEFT: "/assets/boss-shot-left.png",
    BOSS_SHOT_RIGHT: "/assets/boss-shot-right.png",
    PLAYER_SHOT: "/assets/player-shot.png",
    BLOCK: "/assets/block.png",
    GREEN_MINION: "/assets/green-minion.png",
    CYAN_MINION: "/assets/cyan-minion.png",
    ORANGE_MINION: "/assets/orange-minion.png",
    PINK_MINION: "/assets/pink-minion.png",
    PURPLE_MINION: "/assets/purple-minion.png",
    RED_MINION: "/assets/red-minion.png",
    YELLOW_MINION: "/assets/yellow-minion.png",
} 