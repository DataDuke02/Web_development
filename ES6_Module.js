// ES6 Module = an external file that contains reusable code
//              that can be imported into other Javascript files.
//              write reusable code for many different apps.
//              Can contain variables, classes, functions, ... are more
//              Introduced as part of ECMASCRIPT 2015 update

export const PI = 3.14159;

export function getCircumferences(radius){
    return 2 * radius;
}

export function getArea(radius){
    return PI * radius * radius;
}

export function getVolume(radius){
    return 4 * PI * radius * radius;
}
