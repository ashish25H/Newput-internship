let i = 0;

//while loop
// while (i < 10) {
//   console.log(i);
//   i++;
// }

//do-while loop
let j = 0;
// do {
//   console.log(j);
//   j++;
// } while (j <= 10);

//for loop

// for(let i=0; i<10; i++){
//     console.log(i);
// }

//sum of square of n numbers
let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum += i * i;
}
console.log(sum);


//sum of first n odd numbers
let oddSum = 0;
for(let i=1; i<=10;i+=2){
    oddSum += i;
}
console.log('Odd sum ' + oddSum);

//sum of even numbers
let evenSum = 0;
for(let i=0; i<=10; i+=2){
    evenSum += i;
}
console.log('Even sum ' + evenSum);

//count digits in a number
let num = 8975;
let count = 0;
while(num){
    count++;
    num = Math.floor(num/10);
}
console.log(count);

//reverse a number
let number = 9082;
let rev = 0;
while(number){
    rev *= 10;
    rev += Math.floor(number%10);
    number = Math.floor(number/10);
}
console.log('9082 Reverse number ' + rev);