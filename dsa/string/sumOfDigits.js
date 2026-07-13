let s1 = '123a10b8c';

let str = [...s1];

let sum = 0;

for(let i = 0; i< str.length; i++){
    if(Number(str[i])){
        sum = sum + Number(str[i]);
    }
}
console.log(sum)
