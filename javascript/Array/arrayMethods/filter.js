let arr=[2,7,4,6,1,9,52,21];

let ans = arr.filter((item)=>item%2==0)


// for(x of ans){
//     console.log(`${x} ,`);
// }
console.log(ans)


let y = arr.filter(function(ele,i,ref){
    return ele<5;
})
console.log(y);

//map+filter
let z = arr.map(ele=>ele*2).filter(ele=>ele>15);

console.log(z);