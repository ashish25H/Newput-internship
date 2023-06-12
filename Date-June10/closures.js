

// var result = [];

// for (var i = 0; i < 5; i++) {
//   result[i] = function () {
//     console.log(i);
//   };
// }

// result[0](); // 5, expected 0
// result[1](); // 5, expected 1
// result[2](); // 5, expected 2
// result[3](); // 5, expected 3
// result[4](); // 5, expected 4


// var result = [];

// for (var i = 0; i < 5; i++){
//     result[i] = (function(x){
//         console.log(x);
//     })(i);
// }



// var result = [];

// for (let i = 0; i < 5; i++) {
//     result[i] = (function (i) {
//         console.log(i);
//     })(i);
// }

function x(){
    let a;
    function y(){
        console.log(a);
    }
    y();
    a = 10;
}

x();

