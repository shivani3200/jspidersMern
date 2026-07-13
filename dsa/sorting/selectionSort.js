let arr =[5,2,8,3,6,1];
console.log(arr)

for(let i = 0 ; i<arr.length-1;i++){
    let index = i;
    for(let j = i+1; j<arr.length; j++){
        if(arr[index]>arr[j]){
            index = j;
        }
    }
    if(index != i){
        let temp = arr[i];
        arr[i] = arr[index];
        arr[index] = temp;
    }
}

console.log(arr);