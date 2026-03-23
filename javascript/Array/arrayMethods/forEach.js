let sname = ['a','b','c','d','e'];

console.log(sname.length);
console.log(sname);


//foreach
sname.forEach(test);

//named callback function
function test(val,i,arr){
  console.log(`${i} -> ${val}`)
}

console.log("---------")

//anonymous callback function
sname.forEach(function(name)
{
  console.log(name);
})

console.log("---------")
//arrow function
sname.forEach((name) => {
  console.log(name)
})

console.log("---------")

// console.log(val); 
console.log(sname);



let array = [1,2,3,4,5,6];
let sum = 0

array.forEach(function(ele,index,arrRef){
  console.log(ele, index, arrRef)
  sum = sum+ele;

})

console.log(sum)


