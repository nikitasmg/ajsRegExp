import {Character} from './Character';

export class Daemon extends Character {
    constructor (name,type) {
        super(name,type)
        this.attack = 10;
        this.defense = 40;
    }

}