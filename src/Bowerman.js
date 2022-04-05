import {Character} from './Character';
class Bowerman extends Character {
    constructor (name,type) {
        super(name,type)
        this.attack = 25
        this.defense = 25
    }
}
export default Bowerman