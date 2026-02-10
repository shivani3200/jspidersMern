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
// ------------------------------------

let s2 = {
  sid :102,
  sname :"shivani",
  birthYear:2000
}
let s3 = {
  sid :102,
  sname :"justin",
}
  function calcAge(){
    let age = 2026- this.birthYear;
    console.log("age = "+ age)
  }


calcAge();
calcAge.call(s2);
calcAge.call(s3);