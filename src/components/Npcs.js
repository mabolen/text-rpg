//import Mob from "./Mob"

class Mob {
    constructor(description, health, ac, attack) {
        this.description = description
        this.health = health
        this.ac = ac
        this.attack = attack
    }

    get damage() {
        return this.attack()
    }

    attack() {
        return Math.floor(Math.random(this.attack) + 1)
    }
}

// class Npc {

//     constructor(description, speech) {
//         this.description = description
//         this.speech = speech
//     }

//     get speech() {
//         return this.speak()
//     }

//     speak() {
//         return this.speech
//     }
// }

const soldier = new Mob('A soldier is here drink heavily.', 20, 10, 6)
const shadow = new Mob('A shadowy figure lurks about.', 100, 20, 12)
const hobo = new Mob('A filthy deranged vagabond is sitting here.', 10, 5, 2)

const npcs = {
    shadow: shadow,
    hobo: hobo,
    soldier: soldier
}

export default npcs