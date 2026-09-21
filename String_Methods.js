// String Methods = Allow you to manipulate and work with text (strings)

let userName = " Thiru   ";

/*
console.log(userName.charAt(0));
console.log(userName.indexOf("i"));
console.log(userName.length);
*/

/*
userName = userName.trim();
userName = userName.toUpperCase();
userName = userName.toLowerCase();
userName = userName.repeat(3);

console.log(userName);
*/

//let result = userName.startsWith(" ");
//let result = userName.endsWith(" ");
let result = userName.includes(" ");

console.log(result)

if(result){
    console.log("Your username can't include with ' '"); // #1 begin #2 end 
}
else{
    console.log(userName);
}

let phoneNumber = "123-456-7890";

//phoneNumber = phoneNumber.replaceAll("-","/");
//phoneNumber = phoneNumber.padStart(15, "0");
phoneNumber = phoneNumber.padEnd(15, "0");

console.log(phoneNumber);
