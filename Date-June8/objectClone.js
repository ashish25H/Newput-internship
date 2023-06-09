//copy one object into another

let user = {
    name: 'Tony',
    age: 34,
    address: 'US',
}

// let clone = {...user}
let clone = {};


Object.assign(clone,user);

console.log(user === clone);
console.log(`User object : ${user} clone object : ${clone}`);
console.log(user);
console.log(clone);
console.log(user.type === clone.type);



//nested clone
let obj = {
    name: 'Tony',
    age: 34,
    address: 'US',
    type: {
        name: 'ironman',
        power: 'iron suite',
    }
}

// let copy = structuredClone(obj);
let copy = structuredClone(obj);
console.log(copy);

