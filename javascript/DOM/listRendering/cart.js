let item1 = {
  id: 4,
  title: "Mens Casual Slim Fit",
  price: 15.99,
  description:
    "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
  rating: {
    rate: 2.1,
    count: 430,
  },
  qty:1
};

let item2 = {
  id: 17,
  title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
  price: 39.99,
  description:
    "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
  category: "women's clothing",
  image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2t.png",
  rating: {
    rate: 3.8,
    count: 679,
  },
    qty:1

};

let item3 = {
  id: 18,
  title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
  price: 9.85,
  description:
    "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
  category: "women's clothing",
  image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_t.png",
  rating: {
    rate: 4.7,
    count: 130,
  },
    qty:1

};

let item4 = {
  id: 19,
  title: "Opna Women's Short Sleeve Moisture",
  price: 7.95,
  description:
    "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
  category: "women's clothing",
  image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_t.png",
  rating: {
    rate: 4.5,
    count: 146,
  },
    qty:1

};


let itemsArray = [item1, item2, item3, item4];

function displayItems(products) {
  let str = "";
  products.forEach((item) => {
    str += `<div class="col-md-3 m-auto mb-2 p-2">
        <div class="card shadow">
          <div class="card-header">
            <div>
              <img src="${item.image}" alt="hi" class="img-fluid" style="height:200px; width:100%; object-fit:contain">
            </div>
          </div>
          <div class="card-body">
            <div>
              ${item.category}
            </div>
            <div>
             ⭐️ ${item.rating.rate}<span> (
                ${item.rating.count})
              </span>
            </div>
              <h6>＄${item.price}</h6>
            <button class="btn btn-light" onclick="decQty(${item.id})">⊖</button>
            <span>${item.qty}</span>
            <button class="btn btn-light" onclick="incQty(${item.id})">⊕</button>
          </div>
        </div>
      </div>`;
  });

  let container = document.getElementById("container");
  container.innerHTML = str;
}

displayItems(itemsArray);


// counter code

function incQty(id){
  let newArr = [];
  for(let item of itemsArray){
    if(item.id === id){
      let newObj = {...item, qty:++item.qty}
      newArr.push(newObj);
    }
    else{
      newArr.push(item);
    }
  }
  itemsArray= newArr;
  displayItems(itemsArray);
}

function decQty(id){
  let newArr = [];
  for(let item of itemsArray){
    if(item.id === id){
      let newObj = {...item, qty:--item.qty}
      newArr.push(newObj);
    }
    else{
        newArr.push(item);
    }
  }
    itemsArray= newArr;
    displayItems(itemsArray);
}

