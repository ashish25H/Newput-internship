//area of circule
function area(r){
    console.log(3.14*r*r);
}

// area(2);

//odd or even number
function checkOddEven(num){
    if(num%2){
        console.log('odd number');
    }else{
        console.log('Even number');
    }
}
// checkOddEven(20);


//factorial
function fact(num){
    let pro = 1;
   while(num){
    pro *= num;
    --num;
   }
   return pro;
}
// console.log(fact(5));

