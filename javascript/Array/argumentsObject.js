function sum(){
  let sum = 0;

  for(let i = 0; i<arguments.length; i++){
    sum = sum+arguments[i];
  }

  console.log(`sum = ${sum}`);
}

sum();
sum(10,20);
sum(10,20,30);

