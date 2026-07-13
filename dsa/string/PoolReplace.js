let str = 'pool';

let res ="";
for(let i = 0; i< str.length; i++){
 let ch = str.charAt(i);
 if(ch=='o'){
    res = res+'@';
 }
 else{
    res=res+ch;
 }
}

console.log(str);
console.log(res);