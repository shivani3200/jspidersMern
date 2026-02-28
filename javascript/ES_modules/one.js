import {mul,sub} from './two.js'

function sum(a,b){
    let res= a+b;
    let x = mul(res,b)

    console.log(x)

}
sum(10,2);
