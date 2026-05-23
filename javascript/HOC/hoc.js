//function that accepts or return a function is called higher order function
// and a function which is passed as an argument is called as callback function

function sum(a,b){
    return a+b;
}

function HOC(a,b,sum){
    return sum(a,b);
}