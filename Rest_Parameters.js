// rest parameters = (...rest) allow a function work with a variable
//                   number of arguments by bundling them into an array

//                   spread = expands an array into separate elements
//                   rest = bundles separate elements into an array

function openFridge(...foods){
    console.log(...foods);
}

function getFood(...foods){
    return foods;
}
const food1 = "Pizza";
const food2 = "Hamburger";
const food3 = "Hotdog";
const food4 = "Sushi";
const food5 = "Ramen";
const food6 = "Briyani";

//openFridge(food1, food2, food3, food4, food5, food6);

const foods = getFood(food1, food2, food3, food4, food5, food6);

console.log(foods);

function sum(...numbers){

    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}

const total = sum(1, 2, 3, 4, 5, 6);

console.log(`Your Total is $${total}`);

function getAverage(...numbers){

    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result / numbers.length;
}

const average = getAverage(75, 100, 80, 90, 85, 50, 95);

console.log(`Your Average ${average}`);

function combineStrings(...strings){
    return strings.join(" ");
}

const fullName = combineStrings("Mr.","Spongebob","Squarepants", "III");

console.log(fullName);