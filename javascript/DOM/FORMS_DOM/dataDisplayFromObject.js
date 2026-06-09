let usersList = [
  { id: 1, ticket: 0, name: "shivani", city: "jmt", phNo: "0000000000" },
  { id: 2, ticket: 0, name: "kumari", city: "jmt", phNo: "0000000000" },
  { id: 3, ticket: 0, name: "sheela", city: "jmt", phNo: "0000000000" },
  { id: 4, ticket: 0, name: "shiv", city: "jmt", phNo: "0000000000" },
  { id: 5, ticket: 0, name: "laxxmi", city: "jmt", phNo: "0000000000" },
];

let display = document.getElementById("display");

function displayData() {
    let string = "";

  usersList.forEach((user) => {
    string += `<tr>
          <td>${user.id}</td>
          <td>${user.name}</td>
          <td>${user.city}</td>
          <td>
            <button onclick='handleDecrement(${user.id})'>-</button>
            <span>${user.ticket}</span>
            <button onclick='handleIncrement(${user.id})'>+</button>
          </td>
        </tr>`;
  });
  display.innerHTML = string;
}

displayData();


function handleIncrement(id) {
  usersList.map((user) => {
    if (user.id == id) {
      user.ticket = user.ticket + 1;
    }
  });
  displayData();
}

function handleDecrement(id) {
  usersList.map((user) => {
    if (user.id == id) {
      user.ticket = user.ticket - 1;
    }
  });
  displayData();
}
