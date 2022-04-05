import {Zombie} from "../Zombie";

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

