// Array = a variable like structure that can hold
//         more than 1 value

let fruits = ["apple", "orange", "banana"];

fruits[3] = "coconut";
fruits.push("Strawberry");
//fruits.pop();
//fruits.unshift("Mango");
//fruits.shift();

console.log(fruits);

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

fruits.sort().reverse();

let numOfFruits = fruits.length;
let index = fruits.indexOf("coconut");

console.log(index);
console.log(numOfFruits);

for(i = 0; i < fruits.length; i+=2){
    console.log(fruits[i]);
}

for(i = fruits.length - 1; i >= 0; i--){
    console.log(fruits[i]);
}

for(let fruit of fruits){
    console.log(fruit);
}

