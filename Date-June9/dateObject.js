const now = new Date();
console.log(now);
console.log(now.toDateString());

console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());
console.log(now.getDay() + 1);
console.log(now.getTime());


let a = new Date();
a.setFullYear(2020);
a.setDate(15)
a.setMonth(6);
console.log(a);