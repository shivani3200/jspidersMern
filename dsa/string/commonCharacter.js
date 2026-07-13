let s1 ="laila";
let s2="sheela";

for(let i = 0 ;i<s1.length; i++){
    for(let j= 0; j<s2.length;j++){
        if(s1.charAt(i)==s2.charAt(j)){
            console.log(s1.charAt(i));
            s1 =s1.replace(s1.charAt(i),"");
            s2 =s2.replace(s2.charAt(j),"");
        }
    }
}

console.log(s1);
console.log(s2);