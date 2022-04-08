export class Character {

    constructor(name, type) {
        const typesArr = ['Bowerman','Swordsman','Magician','Daemon','Undead','Zombie',]
        if (name.length < 2 || name.length > 10 ) {
            throw new Error('Не корректные значения');
        }
        if(type === 'Bowerman' || type === 'Swordsman' || type === 'Magician' || type === 'Daemon' || type === 'Undead' || type === 'Zombie') {
            this.name = name;
            this.type = type;
            this.health = 100;
            this.level = 1
        } else {
            throw new Error('Не корректные значения');
        }

    }
    levelUp() {
        if (this.health > 0) {
            this.level += 1;
            this.attack += (this.attack * 20) / 100;
            this.defense += (this.defense * 20) / 100;
            this.health = 100;
        } else {
            throw new Error('you are died')
        }
    }

    damage(points) {
        if (this.health > 0) {
            this.health -= points * (1 - this.defense / 100)
        }
    }

}
