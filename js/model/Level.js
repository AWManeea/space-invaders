class Level {
    score = 0
    shots = []
    minions = []
    bosses = []
    blocks = []

    constructor(level_profile) {
        this.name = level_profile.name
        this.difficulty = level_profile.difficulty
        this.blocksCount = level_profile.blocksCount
        this.scoreToReachBoss = level_profile.scoreToReachBoss
        this.health = level_profile.health
        this.bossHealth = level_profile.bossHealth
        this.player = new Player(this.health)
        this.reset()
    }

    createBlocks(count) {
        for (let i = 0; i < count; i++) this.blocks.push(new Block())
    }

    damageBoss(i) {
        if (this.bosses[i].damage() == 0) {
            this.bosses.splice(i,1)
            alert("You win")
            this.reset()
        }
    }

    damagePlayer() {
        if(this.player.damage()==0) {
            alert("You lost")
            this.reset()
        } 
    }

    killMinion(i) {
        this.minions.splice(i, 1)
        if (++this.score == this.scoreToReachBoss) this.bosses.push(new Boss(this.bossHealth))
    }

    reset() {
        this.shots = []
        this.minions = []
        this.bosses = []
        this.blocks = []
        this.score = 0
        this.player = new Player(this.health)
        this.createBlocks(this.blocksCount)
    }
}