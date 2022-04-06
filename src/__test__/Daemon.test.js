import {Daemon} from "../Daemon";
test.each([
    ['test1',
        {name:'Daemon',type:'Daemon'},
        {name: 'Daemon',
            type: 'Daemon',
            health: 100,
            level: 1,
            attack: 10,
            defense: 40
        }],
    ['test2',
        {name:'player',type:'Daemon'},
        {name: 'player',
            type: 'Daemon',
            health: 100,
            level: 1,
            attack: 10,
            defense: 40
        }
        ],
])('objects should be equal ', (_, constructor, expected) => {
    const {name, type} = constructor
    const result = new Daemon(name, type);
    expect(result).toEqual(expected);
});

test('should return error', () => {
    expect(() => new Daemon('a', 'a')).toThrow('Не корректные значения')
})

test.each([
    ['test damage',{health:100,points:0}, 100],
    ['test damage', {health:100,points:10}, 94],
    ['test damage', {health:100,points:30}, 82],
    ['test damage', {health:100,points:40}, 76],
    ['test damage', {health:0,points:40}, 0],
])('objects should contain ', (_, resolve, expected) => {
    const {health, points} = resolve
    const result = new Daemon('Daemon', 'Daemon');
    result.health = health;
    result.damage(points);
    expect(result.health).toEqual(expected);
});

test('levelup', () => {
    const result = new Daemon('Daemon', 'Daemon');
    result.levelUp()
    expect(result).toEqual({name: 'Daemon',
        type: 'Daemon',
        health: 100,
        level: 2,
        attack: 12,
        defense: 48
    })
})

test('should return error', () => {
    const result = new Daemon('Daemon','Daemon');
    result.health = -1
    expect(() => result.levelUp().toThrow('you are died'));
})

