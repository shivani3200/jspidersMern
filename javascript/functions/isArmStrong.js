function main(){

  let n = 153;
  if(isArmStrong(n)){
    console.log(`${n} is Armstrong number`);
  }
  else{
    console.log(`${n} is not Armstrong number`);
  }
}
main();

function isArmStrong(n){

  // let sum = 0;
  // let temp = n;
  // let power = n.toString().length;

  // while(temp > 0){
  //   let digit = temp % 10;
  //   sum += Math.pow(digit, power);
  //   temp = Math.trunc(temp / 10);
  // }

  // return sum == n;  

  let Totalsum = 0;
  let temp = n;
  let count = 0;

  while(temp > 0){
    count++;
    temp = Math.trunc(temp/10);
  }

  temp = n;
  while(temp>0){
  let sum = 0;
    let digit = temp % 10;

    for(let i = 1; i<= count; i++){
      sum = sum + digit;
    }
    Totalsum += sum;
    temp = Math.trunc(temp/10);
  }

  return Totalsum == n;
}