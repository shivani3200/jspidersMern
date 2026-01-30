// function declaration

function name1(){
  console.log();
}
name1();

// function expression

let x = function(){
  console.log();
};
x();
let name2 = function name2(){
  console.log("hbjbjkbkbk");
};
name2();

// arrow funciton

let name4 = () =>{
  console.log("tgthg");
};
name4();


// 
main();
function main(){
  console.log("strt")
  let n = add();
  console.log(n);
  console.log("end")
}

function add(){
  let res = 8+2;
  let ans =3*4;
  return res;
  return ans;// unreachable stmnt
}


main();
main(10);
main(1,"jsp");
main(12,3,4);

