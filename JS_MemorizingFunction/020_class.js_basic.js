// Class로 자기소개 하기 

class Student {
    constructor(name, age){
        this.name = name; 
        this.age = age;
    }

    hello(){
        return `안녕 나는 ${this.name}야 🐰`
    }
}

const 학생1 = new Student("김태희", 26);

console.log(학생1.hello());