import {Zombie} from "../Zombie";
import {Swordsman} from "../Swordsman";
import {Undead} from "../Undead";

test.each([
    ['test1',
        {name:'Zombie',type:'Zombie'},
        {name: 'Zombie',
            type: 'Zombie',
            health: 100,
            level: 1,
            attack: 40,
            defense: 10
        }],
    ['test2',
        {name:'player',type:'Zombie'},
        {name: 'player',
            type: 'Zombie',
            health: 100,
            level: 1,
            attack: 40,
            defense: 10
        }
        ],
])('objects should be equal ', (_, constructor, expected) => {
    const {name, type} = constructor
    const result = new Zombie(name, type);
    expect(result).toEqual(expected);
});

test('should return error', () => {
    expect(() => new Zombie('a', 'a')).toThrow('Не корректные значения')
})

test.each([
    ['test damage',{health:100,points:0}, 100],
    ['test damage', {health:100,points:10}, 91],
    ['test damage', {health:100,points:30}, 73],
    ['test damage', {health:100,points:40}, 64],
    ['test damage', {health:0,points:40}, 0],
])('objects should contain ', (_, resolve, expected) => {
    const {health, points} = resolve
    const result = new Zombie('Zombie', 'Zombie');
    result.health = health;
    result.damage(points);
    expect(result.health).toEqual(expected);
});

test('levelup', () => {
    const result = new Zombie('Zombie', 'Zombie');
    result.levelUp()
    expect(result).toEqual({name: 'Zombie',
        type: 'Zombie',
        health: 100,
        level: 2,
        attack: 48,
        defense: 12
    })
})

test('should return error', () => {
    const result = new Zombie('Zombie','Zombie');
    result.health = -1
    expect(() => result.levelUp().toThrow('you are died'));
})

