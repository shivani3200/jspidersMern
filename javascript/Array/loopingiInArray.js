let nums=[1,2,3,4,5];
console.log(nums);

for(let i = 0; i<nums.length;i++){
  console.log(nums[i]);
}


// for in loop

for(let i in nums){
  console.log(nums[i]);
}

// for of loop
for(let val of nums){
  console.log(val);
}