import {Character} from './Character';

export class Daemon extends Character {
    constructor (name,type) {
        super(name,type)
    }
    attack = 10;
    defense = 40;
}