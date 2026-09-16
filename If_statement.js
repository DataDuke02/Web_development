//  IF STATEMENTS = IF a condition is true, execute some code
//                  if not, do something else 

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");

let age;

mySubmit.onclick = function(){
    age = myText.value;

    age = Number(age);

    if(age >= 100){
        resultElement.textContent = 'Your are TOO OLD! to enter this site'
    }
    else if(age == 0){
        resultElement.textContent = 'You were just born.'
    }
    else if(age >= 18){
        resultElement.textContent = 'Your are old enough to enter this site!'
    }
    else if(age < 0){
        resultElement.textContent = "Your age can't be below 0"
    }
    else{
        resultElement.textContent = 'You must be 18+ to enter this site!'
    }  
    
}
/*
let time = 13;

let isStudent = true;

let hasLicense = false;

if (age >= 18){
    console.log("your are old enough to enter this site");
}
else{
    console.log("you must be 18+ be to enter this site");
}

if(time < 12){
    console.log("Good Morning");
}
else{
    console.log("Good Afternoon");
}

if(isStudent){
    console.log("Your are a Student!");
}
else{
    console.log("Your not a Student!");
}

if (age >= 16){
    console.log("Your are old enough to drive");

    if(hasLicense){
        console.log("You have your license!");
    }
    else{
        console.log("You don't have your license yet!")
    }
}
else{
    console.log("You must be 16+ to have a license");
}
*/

if(age >= 100){
    console.log("your are TOO OLD to enter this site")
}
else if(age == 0){
    console.log("You were just born");
}
else if(age >= 18){
    console.log("Your are old enough to enter this site!");
}
else if(age < 0){
    console.log("Your age can't be below 0");
}
else{
    console.log("you must be 18+ to enter this site!");
}