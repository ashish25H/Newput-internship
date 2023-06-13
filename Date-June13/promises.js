console.log(`start`);


// let pro = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let result = true;

//         if (result) {
//             resolve('Promise done its job');
//         } else {
//             reject(new Error('error'));
//         }
//     }, 3000);
// })

// console.log(pro);

// // setInterval(() => {
// //     console.log(pro);
// // }, 1000);


// pro.then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })


function first(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Work Done');
        }, 2000);
    })
}

first().then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})

console.log(`end`);


(function x(){
    console.log('you');
})();


