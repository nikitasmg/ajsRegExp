import {Undead} from "../Undead";

test.each([
    ['test1',
        {name:'Undead',type:'Undead'},
        {name: 'Undead',
            type: 'Undead',
            health: 100,
            level: 1,
            attack: 25,
            defense: 25
        }],
    ['test2',
        {name:'player',type:'Undead'},
        {name: 'player',
            type: 'Undead',
            health: 100,
            level: 1,
            attack: 25,
            defense: 25
        }
        ],
])('objects should be equal ', (_, constructor, expected) => {
    const {name, type} = constructor
    const result = new Undead(name, type);
    expect(result).toEqual(expected);
});

test('should return error', () => {
    expect(() => new Undead('a', 'a')).toThrow('Не корректные значения')
})

test.each([
    ['test damage',{health:100,points:0}, 100],
    ['test damage', {health:100,points:10}, 92.5],
    ['test damage', {health:100,points:30}, 77.5],
    ['test damage', {health:100,points:40}, 70],
    ['test damage', {health:0,points:40}, 0],
])('objects should contain ', (_, resolve, expected) => {
    const {health, points} = resolve
    const result = new Undead('Undead', 'Undead');
    result.health = health;
    result.damage(points);
    expect(result.health).toEqual(expected);
});

test('levelup', () => {
    const result = new Undead('Undead', 'Undead');
    result.levelUp()
    expect(result).toEqual({name: 'Undead',
        type: 'Undead',
        health: 100,
        level: 2,
        attack: 30,
        defense: 30
    })
})

test('should return error', () => {
    const result = new Undead('Undead','Undead');
    result.health = -1
    expect(() => result.levelUp().toThrow('you are died'));
})
