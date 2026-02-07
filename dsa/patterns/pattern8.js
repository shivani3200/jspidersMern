// *         *    
//   *     *
//     * *   
//     * *   
//   *     * 
// *         *

for(let i = 0; i<5; i++){
  for(let j = 0; j<5; j++){
    if(i==j || i+j==4 || j==4||j==0){
      process.stdout.write("* ");
    } else {
      process.stdout.write("  ");
    }
  }
  console.log();
}