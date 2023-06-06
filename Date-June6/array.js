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
    // alert(`${item} is at index ${index} in ${array}`);
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

//filter function
let netUsers = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" }
];

let tempUsers = netUsers.filter(user => user.id <= 2);
console.log(tempUsers);

//map method
let numbers = [1, 2, 3, 4];
let numberResult = numbers.map(item => item * 2);

console.log(`Original array : ${numbers}`);
console.log(`After map function : ${numberResult}`);
console.log(`Original array : ${numbers}`);

//sort method
let sortNum = [3, 9, 5, 90, 1, 2];
// let sortRes = sortNum.sort();
let sortRes = sortNum.sort((a, b) => a - b);

console.log(sortRes);

//reverse method
let revNum = [1, 2, 3, 4, 5];
let revResult = revNum.reverse();

console.log(revNum);
console.log(revResult);

//split method
let str = 'Ashish';
let splitStr = str.split('');

console.log(splitStr);
console.log(str);

splitStr.reverse()

console.log(`Join method : ${splitStr.join('')}`);

//reduce method
let redArr = [1, 2, 3, 4, 5];

let redResult = redArr.reduce((sum, curr) => sum + curr, 0);

console.log(redResult);

//isArray method

console.log('{} is an array : ' + Array.isArray({}));
console.log('[] is an array : ' + Array.isArray([]));

//camelize function

// function camelize(str){
//     let temp = str.split('-');
//     console.log(temp);
//     let nextTemp = temp.map((str,index)=> index == 0 ? str : str[0].toUpperCase()+str.slice(1));
//     console.log(nextTemp);
//     return nextTemp.join('');
// }

function camelize(str) {
    return str.split('-').map((str, index) => index == 0 ? str : str[0].toUpperCase() + str.slice(1)).join();
}

console.log(camelize('bg-color'));

//filter values
const filterRange = (arr, a, b) => {
    return arr.filter(item => item >= a && item <= b);

}

let arrfun = [5, 3, 8, 1];

let filtered = filterRange(arrfun, 1, 4);

console.log(filtered);


//filterRangeInPlace
const filterRangeInPlace = (arr, a, b) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
        }
    }
}

let arrRang = [5, 3, 8, 1, 2];

filterRangeInPlace(arrRang, 1, 4);
console.log(arrRang);

//Sort in decreasing order

let arrDes = [5, 2, 1, -10, 8];

const sortInDes = (arr) => {
    return arr.sort((a, b) => b - a);
}

console.log(sortInDes(arrDes));


//
let arrs = ["HTML", "JavaScript", "CSS"];

const copySorted = (arr) => {
    // let tempArr = [];
    // for(let i = 0; i<arr.length; i++){
    //     tempArr[i] = arr[i];
    // }
    // return tempArr.sort();

    return arr.slice().sort();
}

let sorted = copySorted(arrs);
console.log(`Original array : ${arrs}`);
console.log(`Sorted array : ${sorted}`);

//
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let usersObj = [john, pete, mary];

let usersMapped = usersObj.map(user => ({ fullname: `${user.name} ${user.surname}`, id: user.id }));

console.log(usersMapped);

//sort by age
let ironman = { name: "ironman", age: 120 };
let noOne = { name: "noOne", age: 80 };
let ram = { name: "ram", age: 90 };
let tony = { name: "tony", age: 30 };
let thor = { name: "thor", age: 28 };


let arrSort = [tony, ram, thor, ironman, noOne];

function sortByAge(arr) {
    arr.sort((user1, user2) => user1.age - user2.age);

}

sortByAge(arrSort);
console.log(arrSort);

//get average age
const getAvgAge = (users) => {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

// let avg = arrSort.reduce((sum,curr) => sum + curr.age, 0) / arrSort.length;
// console.log(`Avg is : ${avg}`);
console.log(getAvgAge(arrSort));


//find unique strings
function unique(arr) {
    let result = [];

    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }
    return result;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(strings));



//group by id
let users3 = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];
  
  let usersById = groupById(users3);

  function groupById(arr){
    return arr.map(user => ({[user.id]: user}))
  }

  console.log(usersById);