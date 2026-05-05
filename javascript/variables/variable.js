console.log("variable - container to store any value")
function main(){
    let n = 10;
    console.log(n, typeof n);//number
     n = Infinity;
     n = -Infinity;
     n = NaN;

     let str = 'jsp'; //string
     str = "jsp";
     str = `jsp`;

     let bool = true;//boolean
     bool = false;

     let x = undefined;//undefined
     console.log(typeof x)
     
     let y = null;//null
     console.log(typeof y);

     let z = 234567890987653456789098765n;//BigInt
     let za = BigInt("2345609856787665123456789098765432456789");


    //  identifiers - names given by developers to any function, variable, class etc
    let num$1;
    let $num1;
    let num_1;
    let num1;
    // let 1num; //wrong identifiers
    // let num 1;
    // let num-1;
    // let num&1;
    // let num#1;
    // let num@1;
    // let try;
    // let catch;
    // let if;
    // let for;


}
main();