let sname = ['a','b','c','d','e'];


let arr = sname.map(function(name,i,snameRef){
  console.log(name,i,snameRef)
  return name+1;
})

console.log(arr);
console.log(sname);