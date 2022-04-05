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

