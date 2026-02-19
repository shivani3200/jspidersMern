let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(arr[0][0]); // Output: 1
console.log(arr[1][2]); // Output: 6
console.log(arr[2][1]); // Output: 8

// Adding a new element to the multi-dimensional array
arr[0].push(10);
console.log(arr[0]); // Output: [1, 2, 3, 10]

// Iterating through the multi-dimensional array
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
    }
} 

//using forEach to iterate through the multi-dimensional array
arr.forEach(subArray => {
    subArray.forEach(element => {
        console.log(element);
    });
});

//using for of to iterate through the multi-dimensional array
for (let subArray of arr) {
    for (let element of subArray) {
        console.log(element);
    }
} 

//using for in to iterate through the multi-dimensional array
for (let i in arr) {
    for (let j in arr[i]) {
        console.log(arr[i][j]);
    }
} 

//using map to create a new multi-dimensional array with modified values
let modifiedArr = arr.map(subArray => {
    return subArray.map(element => element * 2);
});

console.log(modifiedArr); // Output: [[2, 4, 6, 20], [8, 10, 12], [14, 16, 18]]