let sname = ["a", "b", "c", "d", "e"];

let arr = sname.map(function (name, i, snameRef) {
  console.log(name, i, snameRef);
  return name + 1;
});

console.log(arr);
console.log(sname);

let arr2 = [10, 20, 30, 40];

let arr3 = arr2.map((ele, index, arrRef) => {
  //when u use curly braces, u need to explicitly return the value
  return ele * 2;
});

let arr4 = arr2.map((ele, index, arrRef) => ele * 3); // implicit return, when u use parentheses, the value is returned by default
let arr5 = arr2.map((ele) => ele * 4); // when there is only one parameter, we can skip the parentheses as well
let arr6 = arr2.map((ele) => {
  ele * 5;
}); // this will return undefined for all elements, because we are using curly braces but not returning any value explicitly
let arr7 = arr2.map((ele) => {
  return ele * 5;
}); // this will return the correct values, because we are using curly braces and returning the value explicitly
// let arr8 = arr2.map(ele => (
//   let sum = 0;
//   sum = sum + ele;
//   return sum;
// })); //this is not valid syntax, because we cannot use let inside the parentheses of an arrow function, we need to use curly braces and return the value explicitly

let arr9 = arr2.map((ele) => {
  let sum = 0;
  sum = sum + ele;
  return sum;
}); // this is valid syntax, because we are using curly braces and returning the value explicitly

let multi = 1;
let arr10 = arr2.map(
  (ele) =>
    (multi = multi * ele),
    //return multi; // we cannot return here because we are using parentheses, so the value of multi will be returned by default after the multiplication operation is performed
); //
console.log("arr2:", arr2);
console.log("arr3:", arr3);
console.log("arr4:", arr4);
console.log("arr5:", arr5);
console.log("arr6:", arr6);
console.log("arr7:", arr7);
console.log("arr9:", arr9);
console.log("arr10:",arr10);
