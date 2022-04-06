import {Character} from "../Character";
import Bowerman from "../Bowerman";

test('should return error', () => {
    const result = new Character('none','none');
    result.health = -1
    console.log(result.health)
    expect(() => result.levelUp()).toThrow('you are died');
})

