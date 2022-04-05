import Bowerman from "../Bowerman";
test.each([
    ['test1',
        {name:'bower',type:'hunter'},
        {name: 'bower',
            type: 'hunter',
            health: 100,
            level: 1,
            attack: 25,
            defense: 25
        }],
    ['test2',
        {name:'player',type:'bowerman'},
        {name: 'player',
            type: 'bowerman',
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

