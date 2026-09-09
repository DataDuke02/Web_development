// Arithmetic operators = operands (values, variables, etc,.)
//                        operators ( + - * / )
//                        ex. 11 = x + 5

let students = 30;

//students = students + 1;    //31
//students = students - 1;    //29
//students = students * 2;    //60
//students = students / 2;    //15
//students = students ** 3;   //27000
//students = students % 4;    //2
//let extraStudents = students % 3;  //0

//students += 2;    //32
//students -= 2;    //28
//students *= 2;    //60
//students /= 2;    //15
//students **= 2;   //900
//students %= 2;      //0

//students++;   //31
//students--;   //29

/* 
    operator precedence
    1. parenthesis ()
    2. exponents
    3. multiplication & division & modulo
    4. addition & Subtraction
*/

//let result = 1 + 2 * 3 + 4 ** 2;    //23
            //1 + 2 * 3 + 16 = 1 + 6 + 16 = 7 + 16 = 23

//let result = 12 % 5 + 8 /2;    //6
            // 2 + 8 / 2 = 2 + 4 = 6

let result = 6 / 2 ** (2 + 5);  //0.046875
            // 6 / 2 ** 7 = 6 / 128 = 0.046875      
        
console.log(result);
