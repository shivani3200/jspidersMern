e// let listItems = [
//   { id: 1, itemName: "lappy" },
  
//   { id: 2, itemName: "happy" },
  
//   { id: 3, itemName: "gappy" },
// ];

let listItems = localStorage.getItem('items')?JSON.parse(localStorage.getItem('items')):[];

let taskFormElement = document.getElementById("task-form");
let inputElement = document.getElementById("input-box");
// let itemListElement = document.getElementById('items-list');


//update element

function updateItem(id){
  for(let item of listItems){
    if(item.id == id){
      
      let index = listItems.indexOf(item);
      listItems.splice(index,1);
      
      inputElement.value = item.itemName;

      localStorage.setItem('items',JSON.stringify(listItems));
      displayItems(listItems)
    }
  }
  
}
// delete elements
function deleteItem(id) {
  for (let item of listItems) {
    if (item.id == id) {
      console.log(id);
      let index = listItems.indexOf(item);
      listItems.splice(index, 1);
      localStorage.setItem('items',JSON.stringify(listItems));

      displayItems(listItems);
    }
  }
}

// create elements


taskFormElement.addEventListener("submit", function (e) {

  e.preventDefault();

  if (inputElement.value == "") return;
  let itemName = inputElement.value;
  let newItem = { id: Math.trunc(Math.random() * 100), itemName: itemName };
  listItems.unshift(newItem);
  inputElement.value = "";
      localStorage.setItem('items',JSON.stringify(listItems));

  displayItems(listItems);
});


// read elements
function displayItems(items) {
  if (items.length == 0) {
    document.querySelector("#items-list").innerHTML = "list is empty";
    return;
  }
  let eachItem = "";
  items.forEach((item) => {
    eachItem += `<li class=" list-group-item list-group-item-dark mb-1 d-flex justify-between ">
                <span>${item.itemName}</span>
                <span class="btn float-end me-2" onclick="updateItem(${item.id})">✍🏻</span>
                <span class="btn float-end " onclick="deleteItem(${item.id})">❌</span>
              </li>`;
  });
  document.querySelector("#items-list").innerHTML = eachItem;
}
displayItems(listItems);
