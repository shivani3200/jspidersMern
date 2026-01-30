// function main(){
//   let n =10;
//   m1(n);
//   m1(n+2);
//   console.log(n);
// }

// function m1(n){
//   n = n*2;
//   console.log(n);
// }

// ------------

// function main(){
//   let i = 0;
//   let j =0;
//   j = m1(++i) + m1(i++);
//   console.log(i,j);
// }

// function m1(n){
//   return n++;
// }
main();
function main() {
  // let num = + prompt("enter number");
  let num=12;

  if (isEvenOrOdd(num)) {
    console.log(num + " is even")
  }
  else {
    console.log(num + " is odd")
  }

}

function isEvenOrOdd(n) {
  if(n%2== 0 ) return true;
  return false;
}
