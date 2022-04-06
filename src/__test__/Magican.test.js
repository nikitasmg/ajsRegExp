import {Magician} from "../Magician";

test.each([
    ['test1',
        {name:'Magician',type:'Magician'},
        {name: 'Magician',
            type: 'Magician',
            health: 100,
            level: 1,
            attack: 10,
            defense: 40
        }],
    ['test2',
        {name:'player',type:'Magician'},
        {name: 'player',
            type: 'Magician',
            health: 100,
            level: 1,
            attack: 10,
            defense: 40
        }
        ],
])('objects should be equal ', (_, constructor, expected) => {
    const {name, type} = constructor
    const result = new Magician(name, type);
    expect(result).toEqual(expected);
});

test('should return error', () => {
    expect(() => new Magician('a', 'a')).toThrow('Не корректные значения')
})

test.each([
    ['test damage',{health:100,points:0}, 100],
    ['test damage', {health:100,points:10}, 94],
    ['test damage', {health:100,points:30}, 82],
    ['test damage', {health:100,points:40}, 76],
    ['test damage', {health:0,points:40}, 0],
])('objects should contain ', (_, resolve, expected) => {
    const {health, points} = resolve
    const result = new Magician('Magician', 'Magician');
    result.health = health;
    result.damage(points);
    expect(result.health).toEqual(expected);
});

test('levelup', () => {
    const result = new Magician('Magician', 'Magician');
    result.levelUp()
    expect(result).toEqual({name: 'Magician',
        type: 'Magician',
        health: 100,
        level: 2,
        attack: 12,
        defense: 48
    })
})

test('should return error', () => {
    const result = new Magician('Magician','Magician');
    result.health = -1
    expect(() => result.levelUp().toThrow('you are died'));
})

