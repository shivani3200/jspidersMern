
//  2nd higest prime no within in a range
function main(){

  let count = 0;
  for(let n=10; n>1; n--){
    if(n<2)continue;
    if(isPrime(n)){
      count++;
      if(count ==2){
              console.log(n + " is prime");
              break;
      }
    }
  }
}
main();

function isPrime(n){

  for(let i = 2; i<= Math.trunc(n/2); i++){
    if(n%i == 0) return false;
  }

  return true;
}