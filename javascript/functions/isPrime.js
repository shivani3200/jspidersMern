

//  2nd higest prime no within in a range
function main(){

  let n = 132;
  if(isPrime(n)){
    console.log(n + " is prime");
  }
  else{
    console.log(n + " is not prime");
  }
}

main();

function isPrime(n){

  for(let i = 2; i<= Math.trunc(n/2); i++){
    if(n%i == 0) return false;
  }
  return true;
}