
function fetchData() {

    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://fakestoreapi.com/products', true);

    xhr.send();

    xhr.addEventListener('progress', function () {
        document.getElementById("loader-msg"), innerText = "data loading";

        setTimeout(() => {
            document.getElementById("loader-msg").remove();
        }, 2000)
    })

    xhr.addEventListener('load', function () {
        let getData = xhr.JSON.parse(xhr.responseText);
        if (getData.length == 0) return;
        let eachItem = "";
        for (let item of getData) {
            let { name, price, image, rating } = item;

            eachItem += `<div class="col-8 m-auto mb-2 ">
                                <div class="card shadow">
                                <div class="card-body">
                                    <div class="row">
                                    <div class="col-4">
                                        <img src="${item.image}" alt="" class="image-fluid" style="height: 200px; width: 100%; object-fit: contain;">
                                    </div>
                                    <div class="col-8 p-3">
                                        <h3>${item.title}</h3>
                                        <h6 class = "text-gray font-sm">${item.description}</h6>
                                        <h5>⭐️${item.rating.rate} (${item.rating.count})</h5>
                                        <h6>＄${item.price}</h6>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>`

        };
    })

}
fetchData();