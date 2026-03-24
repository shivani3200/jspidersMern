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

class C extends B{
    m3(){
        console.log("m3 of C");
    }
}
class Test{
    static main(){
        let c1 = new C();
        c1.m1();
        c1.m2();
        c1.m3()
    }
}

Test.main();