class Hogwarts {
    constructor(name,house){
    this._name = name;
    this._house = house;
    }
    get name() {
        return this._name;
    }
    get house() {
        return this._house;
    }
}
class wizard extends Hogwarts {
  
    constructor(name,house,object){
        super(name,house);
        this._object = object;
        }
        get name() {
            console.log(`This wizard's name is ${this._name}.`);
            return this._name;
        }
        get house() {
            console.log(`This wizard is from the House of ${this._house}.`)
            return this._house;
        }
        get object() {
            console.log(`This wizard has a magical ${this._object}.`)
            return this._object;
        }
}
var H = new wizard ("Harry Potter", "Griffindor", "invisibility cloak");
console.log(H.name);
console.log(H.house);
console.log(H.object);



