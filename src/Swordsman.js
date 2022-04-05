import {Character} from './Character';

export class Swordsman extends Character {
    constructor (name,type) {
        super(name,type)
    }
    attack = 40;
    defense = 10;
}