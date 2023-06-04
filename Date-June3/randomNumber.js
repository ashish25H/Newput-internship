let n = 0;
let min = 1;
let max = 5;


// while(n<10){
//     let num = Math.floor(min + Math.random() * (max-min));
//     console.log(num);
//     n++;
// }

function randomNumber(min,max){
    let num = min + Math.random() * (max - min + 1);
    return Math.floor(num);
}


console.log(randomNumber(4 , 8));

