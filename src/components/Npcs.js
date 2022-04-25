//import Mob from "./Mob"

class Mob {
    constructor(name, description, health, ac, attack, speech) {
        
        this.name = name
        this.description = description
        this.health = health
        this.ac = ac
        this.attack = attack
        this.speech = speech
    }
}

class Npc {

    constructor(name, description, speech) {
        this.name = name
        this.description = description
        this.speech = speech
    }
}

const soldier = new Mob('Soldier', 'A soldier is here drink heavily.', 20, 10, 6, '*BuuUuuUUrp* Leave me be!')
const shadow = new Mob('Shadow', 'A shadowy figure lurks about.', 100, 20, 12, '...')
const hobo = new Npc('Hobo', 'A filthy deranged vagabond is sitting here.', 'Could you spare some coin?')

const npcs = {
    shadow: shadow,
    hobo: hobo,
    soldier: soldier
}

export default npcs