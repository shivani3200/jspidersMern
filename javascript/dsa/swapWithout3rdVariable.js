

let a = 1;
let b = 3;

function swapWithout3rdVariable(c,d){
    // a = a+b;
    // b = a-b;
    // a = a-b;

    a = a^b;
    b = a^b;
    a = a^b;
}


console.log(`before swap  a = ${a} b = ${b}`)
swapWithout3rdVariable(a,b);
console.log(`after swap  a = ${a} b = ${b}`)