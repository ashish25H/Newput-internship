let arr = [1, 2, 3];
console.log(arr);

let obj = {
  name: "Tony",
  age: 50,
};
console.log(obj);

// Object.getPrototypeOf(arr)

console.log(Object.getPrototypeOf(arr));

let now = new Date();
console.log(Object.getPrototypeOf(now));

const personPrototype = {
  greet() {
    console.log("hello!");
  },
};

const carl = Object.create(personPrototype);
carl.greet(); // hello!

console.log(Object.getPrototypeOf(carl));


let person = {
    name: 'Tony',
    age: 80,
}

let user = {
    type: 'user',
    isAdmin: false,
    // __proto__: person,
}

Object.setPrototypeOf(user, person);

console.log(`User object `);
console.log(user);


//true length property in string
let str = 'Tony ';

String.prototype.trueLength = function(){
    return this.trim().length;
}

console.log(str.trueLength());