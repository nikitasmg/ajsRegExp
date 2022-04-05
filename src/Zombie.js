import {Character} from './Character';

export class Zombie extends Character {
    constructor (name,type) {
        super(name,type)
    }
    attack = 40;
    defense = 10;
}