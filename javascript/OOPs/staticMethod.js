

class Demo{

  static n = 1; //static variable

  static main(){
    let n   = 20;//local variable
    console.log("static method");
    console.log(Demo.n);
    Demo.greet();
  }

  greet(){

    console.log("non-static method");
    console.log(Demo.n);
  }
}


Demo.main();//static method call

let d1 = new Demo();
d1.greet();//non-static method call


