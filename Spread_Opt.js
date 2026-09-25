// Spread Operator = ... allows an iterable such as an
//                   array or string to be expanded
//                   into separate elements
//                   (unpacks the elements)

let number = [1, 2, 3, 4, 5];
let maximum = Math.max(...number);
let minimum = Math.min(...number);

console.log(number);
console.log(maximum);
console.log(minimum);

let username = "Thiru S"
let letters = [...username].join("-");

console.log(letters);

let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrots", "celery", "potatoes"];

let newFruits = [...fruits, ...vegetables, "eggs", "milk"];

console.log(fruits);
console.log(newFruits);