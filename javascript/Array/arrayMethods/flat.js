// flattens the array
let arr = [1, 2, [3, 4], [5, 6]];
console.log(arr.flat());  // [1, 2, 3, 4, 5, 6]
let arr2 = [1, 2, [3, 4, [5, 6]]];
console.log(arr2.flat());  // [1, 2, 3, 4, [5, 6]]
console.log(arr2.flat(2));  // [1, 2, 3, 4, 5, 6]   
