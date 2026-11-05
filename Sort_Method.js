// Sort() = method used to sort element of an array in place.
//          Sorts elements as strings in lexicographic order, not alphabetical
//          lexicographic = (alphabet + numbers + symbols) as strings

let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];

fruits.sort(); 

console.log(fruits);

let numbers = [1, 54, 56, 5, 10, 2, 4, 3, 6, 9, 8, 7, 0];

numbers.sort((a,b) => b - a) // a - b for asec b - a for desc

console.log(numbers);

const people = [{name: "Spongebob", age:30, gpa:3.0},
                {name: "Patrick", age:37, gpa:1.5},
                {name: "Squidward", age:51, gpa:2.5},
                {name: "Sandy", age:27, gpa:4.0}]

// people.sort((a,b) => a.age - b.age);    // for Reverse b.age - a.age
people.sort((a,b) => a.gpa - b.gpa);    // for Reverse b.gpa - a.gpa
people.sort((a,b) => a.name.localeCompare(b.name));  // for Reverse b.name.localeCompare(a.name)

console.log(people);
