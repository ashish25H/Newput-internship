class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello Goodmorning ${this.name} Sir`);
    }
}

class Student extends Person {
    constructor() {
        super(Person);
    }

    greet() {
        console.log(`Hello you are a student`);
    }
}

let std1 = new Student('Tony', 30);
std1.greet();

const person1 = new Person('Thor', 200);
person1.greet();
