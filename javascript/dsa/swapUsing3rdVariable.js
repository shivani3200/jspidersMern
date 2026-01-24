
let a = 123;
let b = 987;

function swapUsing3rdVariable(c,d){

    let temp = c;
    c = d;
    d = temp;

    return [c,d];
}
console.log(`before swap  a = ${a} b = ${b}`)
[a,b]=swapUsing3rdVariable(a,b);
console.log(`after swap  a = ${a} b = ${b}`)
