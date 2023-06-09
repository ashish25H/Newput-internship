// function numberGenerator() {
//     // Local “free” variable that ends up within the closure
//     var num = 1;
//     function checkNumber() {
//         console.log(num);
//         num++;
//     }
//     // num++;
//     return checkNumber;
// }

function numberGenerator() {
    // Local “free” variable that ends up within the closure
    let num = 1;
    function checkNumber() {
        console.log(num);
        num++;
    }
    // num++;
    return checkNumber;
}



var number = numberGenerator();
number(); // 1


console.log(number);

number(); // 2



function sayHello() {
    var say = function () { console.log(hello); }
    // Local variable that ends up within the closure 
    var hello = 'Hello, world!';
    return say;
}

var sayHelloClosure = sayHello();
sayHelloClosure(); 