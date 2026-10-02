// Destructuring = extract values from arrays and objects.
//                 then assign them to variables in a convenient way
//                 [] = to perform array destructuring
//                 {} = to perform object destructuring
//                 5 examples

// ------------ EXAMPLE 1 -----------
// SWAP THE VALUE OF TWO VARIABLES

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);

// ------------ EXAMPLE 2 -----------
// SWAP 2 ELEMENT IN AN ARRAY

const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);

// ------------ EXAMPLE 3 -----------
// ASSIGN ARRAY ELEMENTS TO VARIABLES

const colors2 = ["red", "green", "blue", "black", "white"];

const [firstColor, secondColor, thirdColor, ...extraColors] = colors2;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);

// ------------ EXAMPLE 4 -----------
// EXTRACT VALUES FROM OBJECTS

function displayPerson({firstName, lastName, age, job = "Unemployed"}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

const person1 = {
    firstName : "Spongebob",
    lastName: "Squarepants",
    age: 30,
    job: "Fry Cook",
}

const person2 = {
    firstName : "Patrick",
    lastName: "Star",
    age: 34,
}

displayPerson(person1);

/*
const {firstName, lastName, age, job} = person1

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);
*/

const {firstName, lastName, age, job= "Unemployed"} = person2

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);
