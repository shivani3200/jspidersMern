function Student(id,name,birthyear){
    this.id = id;
    this.name = name;
    this.birthyear = birthyear;
}
Student.prototype.getAge = function(){
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthyear;
}
const student1 = new Student(1,"John",1990);
const student2 = new Student(2,"Jane",1995);

console.log(student1.name); // Output: John
console.log(student2.name); // Output: Jane

console.log(student1.getAge()); // Output: 34 (as of 2024)
console.log(student2.getAge()); // Output: 29 (as of 2024)

Student.prototype.city = "New York";

console.log(student1.city); // Output: New York
console.log(student2.city); // Output: New York

console.log(student1.hasOwnProperty('city')); // Output: false
console.log(student2.hasOwnProperty('city')); // Output: false
console.log('city' in student1); // Output: true
console.log('city' in student2); // Output: true