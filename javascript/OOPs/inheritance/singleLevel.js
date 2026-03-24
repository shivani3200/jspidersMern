class A{
    m1(){
        console.log("m1 0f A")
    }
}
class B extends A{
    m2(){
        console.log("m2 of B")
    }
}
class Test{
    static main(){
        let b1 = new B();
        b1.m1();
        b1.m2();
    }
}

Test.main();