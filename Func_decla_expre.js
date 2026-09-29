// function declaration = define a reusable block of code
//                        that performs a specific task

/*
function hello(){
    console.log("Hello!");
}
*/

// function expression = a way to define functions as 
//                       values or variables

// 1.Callbacks in asynchronous operations
// 2. Higher-order Functions
// 3. Closures
// 4. Event Listeners

/*
const hello = function(){
    console.log("Hello!");
}

setTimeout(function(){
    console.log("Hello!");
}, 3000);

*/

const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(function(element){
    return Math.pow(element, 2);
});

console.log(squares);

const cubes = numbers.map(function(element){
    return Math.pow(element, 3);
});

console.log(cubes);

const evenNums = numbers.filter(function(element){
    return element % 2 === 0;
});

console.log(evenNums);

const oddNums = numbers.filter(function(element){
    return element % 2 !== 0;
});

console.log(oddNums);

const total = numbers.reduce(function(accumulator, element){
    return accumulator + element;
});

console.log(total);
