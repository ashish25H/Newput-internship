const { unescapeLeadingUnderscores } = require("typescript");

const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1,...q2,...q3,...q4];
console.log(year);

console.log(q1);
console.log(...q1);


const arr = [];
arr.push('last');
console.log(arr);



var x = 90;
{
    var x = 89;
    console.log(x);
}
console.log(x);