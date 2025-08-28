
let layoutProducts = document.querySelector(".layout__products");
let layoutCart = document.querySelector(".layout__cart")
let cartProduct = document.querySelector(".cart__products");
let totalPrice = document.querySelector(".total__price");
let cartIco = document.querySelector(".cart__ico")
let btnBuy = document.querySelector(".cart__btn")

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

function loadCart(){
    let myCart = JSON.parse(localStorage.getItem("cart"))
    if(myCart){
        cart = myCart;
        showCart();
    }

    if(cart.length > 0){
        layoutCart.classList.remove("layout__cart--hide")
    }
}

function showCart(){
    if(cart.length > 0){
        layoutCart.classList.remove("layout__cart--hide")
    }else{
        layoutCart.classList.add("layout__cart--hide")
    }
    cartProduct.innerHTML = "";
    cart.forEach(item => {
    let product = findProduct(item.id);
    let subTotal = product.precio * item.quantity;

    cartProduct.innerHTML += `
        <article class="cart__item">
        <div class="cart__container-img">
            <img class="cart__img" src="${product.img}" />
        </div>

        <div class="cart__content">
            <h3 class="cart__product-title">${product.title}</h3>
            <button class="cart__btn-quantity">
            <i class="btn-quantity__ico-minus fa-solid fa-minus" data-id="${product.id}"></i>
            <span class="btn-quantity__number">${item.quantity}</span>
            <i class="btn-quantity__ico-plus fa-solid fa-plus" data-id="${product.id}"></i>
            </button>

            <p class="cart__subtotal">$ ${Math.trunc(subTotal * 100) / 100}</p>
        </div>
        </article>
    `;
});
    let total = getTotal();
    totalPrice.innerHTML =`$ ${total}`;

    let iconMinus = document.querySelectorAll(".btn-quantity__ico-minus");

    iconMinus.forEach(ico =>{
        ico.addEventListener("click", () =>{
            let productID = ico.getAttribute("data-id");
            removeCart(productID);
            showCart();
    })
});

    let iconPlus = document.querySelectorAll(".btn-quantity__ico-plus");

    iconPlus.forEach(ico =>{
        ico.addEventListener("click", () =>{
            let productID = ico.getAttribute("data-id");
            addCart(productID);
            showCart();
    })
});

}

function findProduct(id){
    return products.find(product => product.id == id)
}

let cart = [];

function removeCart(id){
    let cartProducto = findCart(id);
    if (!cartProducto) return;

    if(cartProducto.quantity > 1){
        cartProducto.quantity--;
    } else {
        cart = cart.filter(product => product.id != id);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
}


function getTotal(){
    let total = 0;
    cart.forEach(produtCart =>{
        let product = findProduct(produtCart.id)
        let subTotal = product.precio * produtCart.quantity;

        total+= subTotal;
    })

    return total.toFixed(2);
}

function addCart(id){
    let cartProduct = findCart(id);
    let product = findProduct(id);

    if(cartProduct == null){
        cart.push({ id: id, quantity: 1 });
    } else {
        if(cartProduct.quantity >= product.stock){
            alert("Solo tenemos " + product.stock + " " + product.title + " disponibles");
            return; // 👈 Salimos antes de sumar
        }

        cartProduct.quantity++; // 👈 Solo se suma si hay stock
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(cart);
}


function findCart (id){
    let exist = cart.findIndex(productCart => productCart.id == id);

    if(exist != -1){
        return cart[exist];
    }else{
        return null;
    }

    
}

function showProducts(){
    products.forEach(product =>{
        layoutProducts.innerHTML +=`
        <article class="products__product">
            <div class="product__container--img">
            <img class="product__img" src="${product.img}" alt="${product.title}">
            </div>

            <div class="product__title">
                ${product.title}
            </div>

            <div class="product__price">
                ${product.precio}
            </div>

            <button class="product__btn" data-id="${product.id}">Comprar</button>
        </article>
        `
        
    });

    let allBTNBuy = document.querySelectorAll(".product__btn");
    allBTNBuy.forEach(btn =>{
        btn.addEventListener("click", () =>{
            let productID = parseInt(btn.getAttribute("data-id"));

            let product = findProduct(productID)

            if(product.stock >0){
                //Añadimos al carrito el producto
                addCart(product.id)
                showCart();
            }
        })
    })
};

cartIco.addEventListener("click", ()=>{
    layoutCart.classList.toggle("layout__cart--hide");
})

btnBuy.addEventListener("click", () =>{
    cart = [];
    localStorage.removeItem("cart");
    localStorage.clear();
    layoutCart.classList.toggle("layout__cart--hide");
})
showProducts();

loadCart();