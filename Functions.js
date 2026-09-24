// Function = A section of reusable code.
//            Declare code once, use it whenever you want
//            call the function to execute that code.


function happyBirthday(username, age){
    console.log("Happy birthday to You!");
    console.log("Happy birthday to You!");
    console.log(`Happy birthday dear ${username}!`);
    console.log("Happy birthday to You!");
    console.log(`You are ${age} years old`);
}

happyBirthday("Thiru", 24);
happyBirthday("Spongebob", 30);
happyBirthday("Patrick", 37);


function add(x, y){
    let result = x + y;
    return result;         // return x + y
}
function subtract(x,y){
    return x - y;
}
function multiply(x, y){
    return x * y;
}
function divide(x, y){
    return x / y;
}
function isEven(number){
    if(number % 2 === 0){
        console.log(`${number} is EVEN`)
    }
    else{
        console.log(`${number} is ODD`)
    }
}

function isEVEN(number){
    return number % 2 === 0 ? `${number} is EVEN!` : `${number} is ODD!`;
}

function isValidEmail(email){
    if(email.includes("@")){
        return `${email} is Valid!`
    }
    else{
        return `${email} is Not Valid!`
    }
}

function isvalidEmail(email){
    return email.includes("@") ? `${email} is Vaild!` : `${email} is Not Valid!`
}

let answer = add(2, 3);   // for storing the values
console.log(answer);

console.log(add(2, 3));
console.log(subtract(3, 2));
console.log(multiply(2,3));
console.log(divide(9, 3));

console.log(isEven(6));
console.log(isEVEN(9));

console.log(isValidEmail("Thiru@gmail.com"))
console.log(isvalidEmail("Thiru28gmail.com"))
