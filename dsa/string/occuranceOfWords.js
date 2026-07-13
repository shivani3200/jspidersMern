let s1 = 'bat cat mat cat sat chat cat';

let str = s1.split(" ");

for(let i = 0; i<str.length; i++){
    let count = 1;
    if(str[i]=='')continue;
    for(let j = i+1; j<str.length; j++){
        if(str[i]==str[j]){
            count++;
            str[j]='';
        }
    }
    console.log(str[i]+":"+count);
}