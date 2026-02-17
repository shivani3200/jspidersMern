let item = {
id: 4,
title: "Mens Casual Slim Fit",
price: 15.99,
description: "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
category: "men's clothing",
image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
rating: {
rate: 2.1,
count: 430
}
}

item = JSON.parse(JSON.stringify(item));

console.log(item);

let htmlSnippet = `<div class="col-8 m-auto">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-4">
                <img src="${item.image}" alt="" class="image-fluid" style="height: 200px; width: 100%; object-fit: contain;">
              </div>
              <div class="col-8 p-3">
                <h3>${item.title}</h3>
                <h6>${item.description}</h6>
                <h5>⭐️${item.rating.rate} (242)</h5>
                <h6>₹${item.price}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>`;


  let container = document.getElementById('container');
  container.innerHTML = htmlSnippet;