
let layoutProducts = document.querySelector(".layout__products");

let products =[
    {id: 0, title: "Camiseta", img: "assets/img/product-1.jpg", stock: 5, 
    precio: 14.99},

    {id: 1, title: "Camara", img: "assets/img/product-2.jpg", stock: 7,
    precio: 49.99},

    {id: 2, title: "Nootebook", img: "assets/img/product-3.jpg", stock: 8,
    precio: 499.99},
    
    {id: 3, title: "Zapatillas", img: "assets/img/product-4.jpg", stock: 3,
    precio: 29.99},
]

function showProducts(){
    products.forEach(product =>{
        layoutProducts.innerHTML +=`
        <article class="products__product">
            <div class="product__container--img">
            <img class="product__img" src="${product.img}"
            </div>

            <div class="product__title">
                ${product.title}
            </div>

            <div class="product__price>
                ${product.precio}
            </div>

            <button class="product__btn" data-id="${product.id}">Comprar</button>
        </article>
        `

    });
};


showProducts();