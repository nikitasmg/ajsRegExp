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

