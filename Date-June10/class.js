class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    carName(){
        return this.name;
    }
    carAge(){
        let date = new Date();
        return date.getFullYear() - this.year;
    }
   
}

let alto = new Car('Alto', 2013);

console.log(alto.carName());
console.log(alto.carAge());