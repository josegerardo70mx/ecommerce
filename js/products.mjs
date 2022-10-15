export const items = [{
        id: 1,
        name: "Hoodies",
        price: 14.0,
        image: "assets/images/featured1.png",
        category: "hoodies",
        quantity: 10,
    },
    {
        id: 2,
        name: "Shirts",
        price: 24.0,
        image: "assets/images/featured2.png",
        category: "shirts",
        quantity: 15,
    },
    {
        id: 3,
        name: "Sweatshirts",
        price: 24.0,
        image: "assets/images/featured3.png",
        category: "shirts",
        quantity: 20,
    },
];

export const loadProducts = (items) => {
    items.forEach(item => {
        const product = document.createElement("div")
        product.classList.add("product-item")
        product.innerHTML = `
        <div class =product-img>
                <img src = ./${item.image} alt=${item.id} >
            </div>
            <span id=add-btn>+</span>
            <div class=product-content>
                <div class=product-stock>
                    <h4>$${item.price}</h4>
                    <hr class=stock-divisor>
                    <span id=stock-counter>Stock:${item.quantity}</span>
                </div>
                <h4>${item.name}</h4>
            </div>`;
        document.querySelector(".products-list").appendChild(product)
    });
};