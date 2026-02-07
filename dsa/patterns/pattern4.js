// * * * * * 
// *       * 
// *       * 
// *       * 
// * * * * *

for(let i = 0; i < 5; i++){

  for(let j = 0; j < 5; j++){
    if(i == 0 || i == 4 || j == 0 || j == 4){
      process.stdout.write("* ");
    } else {
      process.stdout.write("  ");
    }
  }
  console.log();
}