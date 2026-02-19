let sname = ['a','b','c','d','e'];

console.log(sname.length);
console.log(sname);

sname.forEach(test);

function test(val,i,arr){
  console.log(`${i} -> ${val}`)
}

console.log("---------")
sname.forEach(function(name)
{
  console.log(name);
})

console.log("---------")

sname.forEach((name) => {
  console.log(name)
})

console.log("---------")

// console.log(val); 
console.log(sname);

