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
Book.apply(m1,["justin","H12"]);

let user2 = ["hailey","U31"]
Book.apply(m2,user2);