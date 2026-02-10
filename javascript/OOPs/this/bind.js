let s1 = {
  sid :102,
  sname :"shivani",
  birthYear:2000
}
let s2 = {
  sid :102,
  sname :"justin",
}
  
function calcAge(){
    let age = 2026- this.birthYear;
    console.log("age = "+ age)
}


calcAge();
let x = calcAge.bind(s1);
x();
calcAge.bind(s2)();

let u1 = calcAge.bind(s1);
u1
