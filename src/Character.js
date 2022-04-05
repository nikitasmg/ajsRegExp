export class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Не корректные значения');
    }
    this.name = name;
    this.type = type;
  }
  health = 100;
  level = 1;
 
}
