let names = ['a','b','c','d','e'];

console.log(names.length);
console.log(names);

let val = names.splice(1,4);//(index, no of elements)affects original array, perform addition deletion and updation
// let val2 = names.splice(2,1,3,"shiv",8);// (index, no of elements, elements to add)
// let val3 = names.splice(2,0,3,"shiv",8);

console.log(val); 
// console.log(val2); 

console.log(names);

let a = [11,12,13,14,15];
// let b = a.splice(1,3)// remove three ele from 1st index
// let b = a.splice(1);// remove 1st element
// let b = a.splice(2);// remove 1st and 2nd element
// let b = a.splice(1,0);// remove nothing element
// let b = a.splice(1,100);// remove 1st element only
// let b = a.splice(1,0,100,200,300);// remove nothing element, add 100 200 300 from index 1
// let b = a.splice(2,0,"hello");// remove nothing element
let b = a.splice(2,1,"hello");// remove one element i.e. 2nd, and add hello at 2nd index


console.log(a)
console.log(b)

