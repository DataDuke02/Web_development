// Sort() = method used to sort element of an array in place.
//          Sorts elements as strings in lexicographic order, not alphabetical
//          lexicographic = (alphabet + numbers + symbols) as strings

let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];

fruits.sort(); 

console.log(fruits);

let numbers = [1, 54, 56, 5, 10, 2, 4, 3, 6, 9, 8, 7, 0];

numbers.sort((a,b) => b - a) // a - b for asec b - a for desc

console.log(numbers);
