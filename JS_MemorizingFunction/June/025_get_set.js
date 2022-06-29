// 1. 길이, 넓이, 둘레 구하기 

class Square {
    #length;

    constructor(length) {
        this.length = length;
    }

    get length() {
        return this.#length
    }
    get perimeter() {
        return this.#length * 4;
    }
    get area() {
        return this.#length * this.#length;
    }

    set length(length){
        if(length <= 0){
            throw Error("0보다 커야지!!");
        }
        this.#length = length;
    }
}

const squareA = new Square(10);
console.log(`길이: ${squareA.length}, 둘레: ${squareA.perimeter}, 넓이: ${squareA.area}`);

const squareB = new Square(-10);


// 2. 이름 바꿔서 불러오기 
let user = {
    name: "Taehee",
    familyName: "Kim",

    get fullName() {
        return `${this.name} ${this.familyName}`
    },

    set fullName(value) {
        [this.name, this.familyName] = value.split(' ');
    }
}

user.fullName = 'Alice Cooper';
alert(user.fullName);