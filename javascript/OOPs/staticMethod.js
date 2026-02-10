

class Demo{

  static n = 1; //static variable
  c = 9;

  static main(){
    let n   = 20;//local variable
    console.log("static method");
    console.log(Demo.n);
    Demo.greet();

    let f1 = new Demo();
    console.log(f1.c);
  }

  greet(){

    console.log("non-static method");
    console.log(Demo.n);
  }
}


Demo.main();//static method call

let d1 = new Demo();
d1.greet();//non-static method call


