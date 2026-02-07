// *            
//   *     
//     *   
//     * *   
//   *     * 
// *         *

for(let i = 0; i<5; i++){
  for(let j = 0; j<=i; j++){
    if(i==j || i+j==4){
      process.stdout.write("* ");
    } else {
      process.stdout.write("  ");
    }
  }
  console.log();
}