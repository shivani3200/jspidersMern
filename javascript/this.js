"use strict"

let m1 = () =>{
  console.log(this);
}
function main(){

  console.log(this);

  let greet = () =>{
  console.log(this);

  greet();
}
}



let s1 = {
  sid :102,
  sname :"shivani",
  calcAge: function(){
    console.log(this); // s1 object is printed
  }
}

s1.calcAge();