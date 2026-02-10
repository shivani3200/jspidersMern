// class Student {

//   name = null;
//   phoneNo = null;
//   static institute = "jspider"
//   static count = 0;
// }

// class Test {
//   static main() {

//     let s1 = new Student();
//     s1.name = "shivani";
//     s1.phoneNo = 987656780987
//     Student.count++;
//     console.log(Student.count)

//     console.log(s1);


//     let s2 = new Student();
//     s2.name = "priya";
//     s2.phoneNo = 987656780987
//     Student.count++;
//     console.log(Student.count)

//     console.log(s2)
//   }

// }

// Test.main();


class Student {

  static institute = "jspider"
  static count = 0;

  constructor(name,phNo){
    this.name = name;
    this.phNo = phNo;
    Student.count++;
  }
}

class Test {
  static main() {

    let s1 = new Student("justin",5678768778);
    console.log(Student.count)
    console.log(s1);


    let s2 = new Student("bieber",7898768665);
    console.log(Student.count)
    console.log(s2)
  }

}

Test.main();