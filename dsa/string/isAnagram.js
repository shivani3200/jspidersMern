let s1 ='care';
let s2 = 'race';

function isAnagram(s1,s2){
    while(true){
        if(s1.length != s2.length)return false;
        if(s1.length ==0 && s2.length ==0) return true;

        let ch = s1.charAt(0);
       s1= s1.replace(ch,"");
       s2= s2.replace(ch,"");
    }
}

console.log(isAnagram(s1,s2))