let arr=[9,2,7,5,6];

console.log(arr);

for(let i = 1; i<arr.length; i++){
    let key = arr[i];
    let j = i-1;

    while(j>=0 && arr[j]>key){
        arr[j+1] = arr[j];
        j--;
    }
    arr[j+1]= key;
}

console.log(arr);