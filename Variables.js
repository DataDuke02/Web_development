/* variable = A container that stores a value.
              Behave as if it were the value it contains
*/

// 1. declaration   let x;
// 2. assignment    x = 100;

let x;
x = 100;

console.log(x);

let age = 25;
let price = 10.99;
let cgpa = 8.5;
let firstName = 'Thiru'
let Password = "Sid@28"
let favoriteFood = 'Briyani'
let email = 'Thiru@gmail.com'

console.log(age);
console.log(price);
console.log(cgpa);

console.log(typeof age);
console.log(`Your age ${age} years old.`);
console.log(`The price is ${price}`);
console.log(`Your cgpa is ${cgpa}`);

console.log(typeof firstName);
console.log(typeof favoriteFood);
console.log(typeof Password);
console.log(typeof email);

console.log(`Your name is ${firstName}`);
console.log(`Your password ${Password}`);
console.log(`You like ${favoriteFood}`);
console.log(`Your mail id is ${email}`);

// Booleans

let online = true;
let forSale = false;
let isStudent = false;

console.log(`Thiru is online: ${online}`);
console.log(`Is this car for sale : ${forSale}`);
console.log(`Enrolled: ${isStudent}`);

let fullName = "Thiru S";
let age1 = 24;
let student = false;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${age1} years old`;
document.getElementById("p3").textContent = `Enrolled : ${student}`;
