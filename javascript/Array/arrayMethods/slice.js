let names = ['a','b','c','d','e'];

console.log(names.length);
console.log(names);

let val = names.slice(1,4);
let val2 = names.slice(1,-4);//


console.log(val); 
console.log(val2); 

console.log(names);


let a = [11,12,13,14,15];// it remains unaffected
let b = a.slice(0);//give zeoth to last index element
let c = a.slice(-1);//give last index element
let d = a.slice(1);//give first to last index element
let e = a.slice(1,4);//give first to 3rd index element

console.log(a);
console.log(b)
console.log(c)
console.log(d)
console.log(e)

