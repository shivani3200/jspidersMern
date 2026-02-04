function main(){
  var a = 10;
  function m1(){
    console.log(a);
  }

  return m1;
}

let returnValue = main();
console.log(returnValue);

returnValue();