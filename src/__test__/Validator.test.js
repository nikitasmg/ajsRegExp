import {Validator} from "../Validator";

test.each([
    ['test1 regExp',{name:'Nikita'}, true],
    ['test2 regExp', {name:'1Nikita'}, false],
    ['test3 regExp', {name:'N123ikita'}, true],
    ['test4 regExp', {name:'N123ik32ita'}, true],
    ['test5 regExp', {name:'N1234ikita'}, false],
    ['test6 regExp', {name:'Nikita-'}, false],
    ['test7 regExp', {name:'-Nikita'}, false],
    ['test8 regExp', {name:'_Nikita1'}, false],
    ['test9 regExp', {name:'Nikita1_'}, false],
])('objects should contain ', (_, resolve, expected) => {
    const {name} = resolve
    const result = new Validator(name);
    expect(result.validateUsername()).toEqual(expected);
});