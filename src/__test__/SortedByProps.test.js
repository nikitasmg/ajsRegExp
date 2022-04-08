import {orderByProps} from '../orderByProps'

test.each([
    ['test order', {
        obj: {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40},
        props: ["attack", "level"]
    },
        [
            { key: 'attack', value: 80 },
            { key: 'level', value: 2 },
            { key: 'defence', value: 40 },
            { key: 'health', value: 10 },
            { key: 'name', value: 'мечник' }
        ]
    ],
    ['test order', {
        obj: {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40},
        props: ["level", "attack"]
    },
        [
            { key: 'level', value: 2 },
            { key: 'attack', value: 80 },
            { key: 'defence', value: 40 },
            { key: 'health', value: 10 },
            { key: 'name', value: 'мечник' }
        ]
    ],
    ['test order', {
        obj: {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40},
        props: []
    },
        [
            { key: 'attack', value: 80 },
            { key: 'defence', value: 40 },
            { key: 'health', value: 10 },
            { key: 'level', value: 2 },
            { key: 'name', value: 'мечник' }
        ]
    ],
    ['test order', {
        obj: {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40},
        props: ['health']
    },
        [
            { key: 'health', value: 10 },
            { key: 'attack', value: 80 },
            { key: 'defence', value: 40 },
            { key: 'level', value: 2 },
            { key: 'name', value: 'мечник' }
        ]
    ],
])('should return ordered obj ', (_, resolve, expected) => {
    const {obj, props} = resolve
    const result = orderByProps(obj,props)
    console.log(result)
    expect(result).toEqual(expected);
});
