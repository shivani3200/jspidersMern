

function greet() {
  console.log(this);
  console.log("greet msg");
}
greet(); //function call

let g1 = new greet();//constructor function call
console.log(g1);
console.log("-----------------------------------------------")


function Student() {
  console.log("student")
}

let s1 = new Student();
s1.sid = 101;
s1.sname = "shivnai";

console.log(s1);


let s2 = new Student();
s2.sid = 202;
s2.sname = "Kumari";

console.log(s2);

console.log("-----------------------------------------------")
function Student1(sid, sname, birthYear) {
  this.sid = sid; //this.sid creat
  this.sname = sname;
  this.dob = birthYear;
  this.calcAge = function () {
    let age = 2026 - this.dob;
    console.log("age  = " + age);
  }
}

let s3 = new Student1(303, "Vijay", 2000);
console.log(s3);
s3.calcAge();
let s4 = new Student1(404, "Devarkonda", 1990);
console.log(s4);
s4.calcAge();

console.log("-----------------------class------------------------")


class User {
  constructor(sid, sname, birthYear) {
    this.sid = sid; //this.sid creat
    this.sname = sname;
    this.dob = birthYear;
    this.calcAge = function () {
      let age = 2026 - this.dob;
      console.log("age  = " + age);
    }
  }

}

let s5 = new User(505, "katrina", 2000);
console.log(s5);
s5.calcAge();
let s6 = new User(606, "Kaif", 1990);
console.log(s6);
s6.calcAge();

console.log("-----------------------class ------------------------")


class User1 {
  // constructor() {

  // }
  constructor(sname) { //not possible, we cannot have 2 constructor in one class

  }

}