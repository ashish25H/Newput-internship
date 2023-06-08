let now = new Date();
console.log(now);
console.log(now.getTime());
console.log(now.getHours() +':'+ now.getMinutes() +':'+ now.getSeconds());
console.log(`${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`);
console.log(now.getDate());

console.log(now.getFullYear());


console.log(typeof null);
console.log(typeof undefined);
console.log(typeof 'you');


let obj = {
    a: 10,
    b: 20,
    c: 30,
    d: 40,
    e: 50,
}

console.log(Object.values(obj).reduce((sum, curr) => sum + curr, 0));

console.log('string');