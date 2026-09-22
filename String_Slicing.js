// String Slicing = creating a substring
//                  from a portion of another string

//                  string.slice(start, end)


const fullName = "Thirugnana Sambantham S";

/*
let firstName = fullName.slice(0,10);
let middleName = fullName.slice(11,21);
let lastName = fullName.slice(22);
let firstChar = fullName.slice(0,1);
let lastChar = fullName.slice(-1);

console.log(firstName);
console.log(middleName);
console.log(lastName);
console.log(firstChar);
console.log(lastChar);
*/

let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ") + 1); // + 1 skip the first index value in string

console.log(firstName);
console.log(lastName);

const email = "Thiru2802@gmail.com";

let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);

console.log(username);
console.log(extension);
