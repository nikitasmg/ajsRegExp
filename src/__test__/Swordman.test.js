import {Swordsman} from "../Swordsman";

test.each([
    ['test1',
        {name:'sword',type:'sword'},
        {name: 'sword',
            type: 'sword',
            health: 100,
            level: 1,
            attack: 40,
            defense: 10
        }],
    ['test2',
        {name:'player',type:'sword'},
        {name: 'player',
            type: 'sword',
            health: 100,
            level: 1,
            attack: 40,
            defense: 10
        }
        ],
])('objects should be equal ', (_, constructor, expected) => {
    const {name, type} = constructor
    const result = new Swordsman(name, type);
    expect(result).toEqual(expected);
});

test('should return error', () => {
    expect(() => new Swordsman('a', 'a')).toThrow('Не корректные значения')
})

