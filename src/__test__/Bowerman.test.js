import Bowerman from "../Bowerman";
test.each([
    ['test1',
        {name:'bower',type:'Bowerman'},
        {
            name: 'bower',
            type: 'Bowerman',
            health: 100,
            level: 1,
            attack: 25,
            defense: 25
        }],
    ['test2',
        {name:'player',type:'Bowerman'},
        {
            name: 'player',
            type: 'Bowerman',
            health: 100,
            level: 1,
            attack: 25,
            defense: 25
        }
        ],
])('objects should be equal ', (_, constructor, expected) => {
    const {name, type} = constructor
    const result = new Bowerman(name, type);
    expect(result).toEqual(expected);
});

test('should return error', () => {
    expect(() => new Bowerman('a', 'a')).toThrow('Не корректные значения')
})

test('should return error', () => {
    expect(() => new Bowerman('Bowerman', 'asdasd')).toThrow('Не корректные значения')
})

test.each([
    ['test damage',{health:100,points:0}, 100],
    ['test damage', {health:100,points:10}, 92.5],
    ['test damage', {health:100,points:30}, 77.5],
    ['test damage', {health:100,points:40}, 70],
    ['test damage', {health:0,points:40}, 0],
])('objects should contain ', (_, resolve, expected) => {
    const {health, points} = resolve
    const result = new Bowerman('bower', 'Bowerman');
    result.health = health;
    result.damage(points);
    expect(result.health).toEqual(expected);
});

test('levelup', () => {
    const result = new Bowerman('bower', 'Bowerman');
    result.levelUp()
    expect(result).toEqual({name: 'bower',
        type: 'Bowerman',
        health: 100,
        level: 2,
        attack: 30,
        defense: 30
    })
})

test('should return error', () => {
    const result = new Bowerman('Bowerman','Bowerman');
    result.health = -1
    expect(() => result.levelUp()).toThrow('you are died');
})



