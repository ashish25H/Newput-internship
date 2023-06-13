let sum = sumAll(1, 4, 5, 10, 20);

function sumAll() {
    let sum = 0;
    let length = arguments.length;

    for (let i = 0; i < length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(sum);


// function count() {
//     let counter = 0;

//     function add() {
//         counter += 1;
//         return counter;
//     }
//     return add;
// }

// let x = count();

// console.log(x());
// console.log(x());
// console.log(x());
// console.log(x());


// let add = (function(){
//     let count = 0;
//     return function(){count += 1; return count;}
// })();


// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());