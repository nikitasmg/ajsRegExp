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

