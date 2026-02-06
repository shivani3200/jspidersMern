

function greet(){
  console.log(this);
  console.log("greet msg");
}
 greet(); //function call

let g1 = new greet();//constructor function call
console.log(g1);