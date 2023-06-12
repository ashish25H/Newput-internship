const myObj = {
    name: "John",
    age: 30,
    cars: [
        { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
        { name: "BMW", models: ["320", "X3", "X5"] },
        { name: "Fiat", models: ["500", "Panda"] }
    ],
}

myObj.prototype.show = function(){
    console.log(this);
}

for (let item in myObj.cars) {
    console.log(myObj.cars[item].name);
    for (let j in myObj.cars[item].models) {
        console.log(myObj.cars[item].models[j]);
    }
}

// console.log(JSON.stringify(myObj));

const person = {
    name: "John",
    age: function () { return 30; }
};

person.age = person.age.toString();

console.log(JSON.stringify(person));

let arr = [
    {name: 'tony'},
    {name: 'thor'},
    {name: 'hawkeye'},
    {name: 'spiderman'},
    {name: 'fireman'},
]

for(const item of arr){
    console.log(item.name);
}

console.log(myObj);