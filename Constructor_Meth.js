// Constructor = special method for defining the
//               properties and methods of objects

/*
const car1 = {
    make: "Ford",
    model: "Mustang",
    year: 2026,
    color: "red",
    drive: function(){console.log(`You Drive the ${this.model}`)}
}

const car2 = {
    make: "Chevrolet",
    model: "Camaro",
    year: 2025,
    color: "Blue",
    drive: function(){console.log(`You Drive the ${this.model}`)}
}
const car3 = {
    make: "Dodge",
    model: "Charger",
    year: 2026,
    color: "Black",
    drive: function(){console.log(`You Drive the ${this.model}`)}
}
const car4 = {
    make: "BMW",
    model: "M4",
    year: 2024,
    color: "Green",
    drive: function(){console.log(`You Drive the ${this.model}`)}
}
*/

function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = function(){console.log(`You Drive the ${this.model}`)}
}

const car1 = new Car("BMW","BMW - M4", "2024", "Green");
const car2 = new Car("Ford","Mustang", "2024", "Red");
const car3 = new Car("Dodge","Charger", "2026", "Black");
const car4 = new Car("Chevrolet","Camaro", "2025", "Sliver");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);
car1.drive();

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);
car2.drive();

console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);
car3.drive();

console.log(car4.make);
console.log(car4.model);
console.log(car4.year);
console.log(car4.color);
car4.drive();
