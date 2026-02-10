

class C{
  a = 10;
  b = 20;
  static c = 100;
}


class D{
  static main(){
    let c1 = new C();
    let c2 = new C();


    console.log("c1.a = "+c1.a);//non static
    console.log("c2.a = "+c2.a);
    console.log("C = "+C.c)// static variable 

    c1.a = 44;
    console.log("c1.a = "+c1.a);

    let c3 = new C();
    console.log("c3.a = "+c3.a);
  }
}

D.main();