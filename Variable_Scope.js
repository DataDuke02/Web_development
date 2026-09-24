// variable Scope =  where a variable is recognized
//                   and accessible (local vs global)

let x = 3;

function1();

function function1() {
    let x = 1;              // answer 1 when we use local even if we have a global
    console.log(x);
}

function function2(){
    let x = 2;
    console.log(x);
}