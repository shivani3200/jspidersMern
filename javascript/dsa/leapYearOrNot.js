let year = 2012;

function leapYearOrNot(year){

    if(year%4===0 || year%400 ===0 && year%100 !==0) return true;
    return false;

    // if(year%4===0 && year%400 ===0){
    //     if(year%100 !==0) return true;
    // }

    return false;
    
}

let ans = leapYearOrNot(year);

console.log(ans?"leap year":"not a leap year");