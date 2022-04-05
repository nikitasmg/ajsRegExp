import {Character} from './Character';

export class Magician extends Character {
    constructor (name,type) {
        super(name,type)
    }
    attack = 10;
    defense = 40;
}