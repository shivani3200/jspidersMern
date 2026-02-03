let s2 = {
  
  sid:110,
  sname:"shivani",
  birthyear:2000,
  calcAge:function(){
    consolelog("age is 8734598");
  }
}
console.log(s2);



console.log("Using dot notation");
console.log(s2.sid);
console.log(s2.sname);
console.log(s2.birthyear);
s2.calcAge();

console.log("Using bracket notation");
console.log(s2["sid"]);
console.log(s2["sname"]);
console.log(s2["birthyear"]);
s2["calcAge"]();



// difference between dot and bracket notation

// with variable
let propName = "sname";

console.log(s2.propName);      // undefined - dot notation fails to evaluate variable
console.log(s2["propName"]);   // undefined - bracket notation fails to evaluate variable

// to access property using variable, we must use bracket notation

console.log(s2[propName]);     // shivani 

// with invalid identifer

let info = "1sid";

s2[info] = 999;    // valid
// s2.info = 999;  // invalid

console.log(s2[info]);5