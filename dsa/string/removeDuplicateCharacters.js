let s1 = 'banana';

let str =[...s1];
let res='';

for(let i = 0; i< str.length; i++){

    if(str[i]=='')continue;
    for(let j = i+1; j<str.length; j++){
        if(str[i]==str[j]){
            str[j]='';
        }
    }

    res+=str[i];
}

console.log(res);