let m1 = {
  id:101,
  mname:"kgf"
}
let m2 = {
  id:202,
  mname:"salaar"
}

function Book(sname,seatNo){
  console.log(`hey ${sname} ! you ticket for movie ${this.mname} has been confirmed with seat no = ${seatNo}`);
}
Book.call(m1,"justin","H12")

let user1 = ["hailey","U31"]
// Book.call(m2,user1)
Book.call(m2,...user1)