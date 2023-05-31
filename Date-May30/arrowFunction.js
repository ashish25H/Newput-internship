// sum of digits
const sumOfDigits = (num)=>{
    let sum = 0;
    while(num){
        sum += Math.floor(num%10);
        num = Math.floor(num/10);
    }
    return sum;
}
// console.log(sumOfDigits(-9855));



