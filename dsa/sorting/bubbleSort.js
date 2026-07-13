let arr=[9,2,7,5,6];
  console.log(arr)
    
    for(let i = 0 ; i<arr.length-1;i++){
        
        for(let j = i+1; j<arr.length; j++){
            if(arr[i]>arr[j]){
             let temp = arr[i];
              arr[i] = arr[j];
              arr[j] = temp;
            }
        }
    }


console.log(arr);