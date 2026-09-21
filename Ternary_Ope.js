// Ternary operator = a shortcut to if{} and else{} statements
//                    helps to assign a variable based on condition
//                    condition ? codeIfTrue : codeFalse

/*
let age = 21
let message = age >= 18 ? "You're an Adult" : "You're a Minor";

console.log(message);
*/

/*
let time = 16;

let greeting = time < 12 ? "Good Morning!" : "Good Afternoon!";

console.log(greeting);
*/

/*
let isStudent = true
let message = isStudent ? "You are a Student" : "You are Not a Student";
console.log(message);
*/

let purchaseAmount = 125;

let discount = purchaseAmount >= 100 ? 10 : 0;

console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount / 100)}`);