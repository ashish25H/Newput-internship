let fruits = ["Apple", "Orange", "Pear"];
// alert(fruits.pop());


fruits.push('Onemore');
// alert(fruits);

//shift
let arr = ['one', 'two', 'three'];
// alert(arr.shift());
// alert(arr);

//unshift
let person = ['Tony', 'Thor', 'Ironman',];
// alert(`Before unshift ${person}`);
person.unshift('Hulk');
// alert(`After unshift ${person}`);


//copy by reference
let temp = fruits;
console.log(temp === fruits);


//for of loop
for (let fr of fruits) {
    console.log(fr);
}



//Array length is greatest numeric index plus one 
let arr2 = [];
arr2[340] = 'you';
console.log(arr2.length);

//we can modify the length property
let tempArr = [1, 2, 3, 4, 5, 6];
tempArr.length = 4;
console.log(tempArr);

tempArr.length = 2;
console.log(tempArr);

//
let array = ["a", "b"];

array.push(function () {
    //   alert( this );
    console.log(this);
})

array[2]();

//function suminput
function sumInput() {
    let input = [];

    while (true) {
        let num = prompt('Enter a number', 0);

        if (num === '' || num === null || !isFinite(num)) break;

        input.push(+num);
    }
    let sum = 0;
    for (let number of input) {
        sum += number;
    }
    console.log(sum);
}

// end

//splice method

//delete elements
let sparr = ['I', 'am', 'good'];

sparr.splice(1, 1);
console.log(sparr);

let insertElement = ['I', 3, 5, 'YOU', 'Delhi'];

//replace elements
insertElement.splice(1, 3, 'am', 'from');
console.log(insertElement);

//insert elements
let insArr = ['one', 'two', 'three'];
insArr.splice(2, 0, 'four', 'five', 'six');

console.log(insArr);

//concat arrays
let catArr = [1, 2, 3, 4];
let newArr = catArr.concat(8, 9, ['i', 'am', 'Ironman']);
console.log(newArr);



//
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    alert(`${item} is at index ${index} in ${array}`);
});


//
//   let users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Pete"},
//     {id: 3, name: "Mary"}
//   ];

//   let user = users.find(item => item.id == 1);

// //   alert(user.name);
//   console.log(user.name);

let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" },
    { id: 4, name: "John" }
];

// Find the index of the first John
// alert(users.findIndex(user => user.name == 'John')); // 0
console.log(users.findIndex(user => user.name == 'John'));

// Find the index of the last John
// alert(users.findLastIndex(user => user.name == 'John')); 
console.log(users.findLastIndex(user => user.name == 'John'));