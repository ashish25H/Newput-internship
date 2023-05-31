// let user = {
//     name: "John",
//     age: 30,
  
//     sayHi() {
//       // "this" is the "current object"
//       console.log(this.name);
//     }
  
//   };
  
// user.sayHi();


let user = {
    name: "John",
    age: 30,
  
    sayHi() {
      // "this" is the "current object"
      console.log(user.name);
    }
  
  };
  
user.sayHi();

let clone = user;
// let clone = {};
// Object.assign(clone,user);
user = null;
clone.sayHi();

