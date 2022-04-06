import {Character} from './Character';

export class Magician extends Character {
    constructor (name,type) {
        super(name,type)
        this.attack = 10;
        this.defense = 40;
    }
}