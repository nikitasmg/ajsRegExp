import {Character} from './Character';

export class Undead extends Character {
    constructor (name,type) {
        super(name,type)
    }
    attack = 25;
    defense = 25;
}