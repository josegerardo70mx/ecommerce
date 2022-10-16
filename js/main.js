import {closeCart, openCart} from './cart.mjs'
import {items}  from './products.mjs'

const menu = document.getElementById("menu")

// Animacion de carga del website.
const loadComponent = () =>{
  const loader = document.getElementById("loader-container");
  setTimeout( () => {
    loader.classList.add("hide")
  }, 3000)
}

// Cambia a darkmode.
const changeMode = () => {
  const btnDark =document.getElementById("darkmode")
  btnDark.addEventListener("click", () => {
    document.body.classList.toggle("dark")
    if (btnDark.classList.contains("fa-moon")) {
      btnDark.classList.replace("fa-moon", "fa-sun")
    } else {
      btnDark.classList.replace("fa-sun", "fa-moon")
    }
  })
}

// abre el menu de navegación.
const openMenu = () =>{
  const btnOpen = document.getElementById("menu-open")
  btnOpen.addEventListener("click", e => {
    menu.classList.add("open")
  })
}

// cierra el menu de navegación.
const closeMenu = () => {
  const btnClose = document.getElementById("menu-close")
  btnClose.addEventListener( "click", e => {
    menu.classList.remove("open")
  })
}

// carga los productos en inventario en el website
const loadProducts = (items) => {
  items.forEach(item => {
    const product = document.createElement("div")
    product.classList.add("product-item")
    product.innerHTML = `
        <div class='product-img'>
        <img src='./${item.image}' alt='${item.id}'>
            </div>
            <button onclick='getProduct()' id='add-btn' value='${item.id}'>+</button>
            <div class='product-content'>
                <div class='product-stock'>
                    <h4>$${item.price.toFixed(2)}</h4>
                    <hr class='stock-divisor'>
                    <span id='stock-counter'>Stock:${item.quantity}</span>
                </div>
                <h4>${item.name}</h4>
            </div>`;
    document.querySelector(".products-list").appendChild(product)
  });
};

const cartFill = () => {
  let itemCounter = 0;
  let allItems = 0;
  let subtotal = 0;
  items.forEach( item => {
    const cartContent = document.createElement('div')
    cartContent.classList.add('to-buy')
    cartContent.innerHTML = `
      <div class='cart-item-img'>
        <img src='./${item.image}'>
      </div>
      <div class='cart-item'>
        <h4>${item.name}</h4>
        <div class='cart-stock-item'>
          <p>Stock: ${item.quantity}</p>
          <hr>
          <p class='item-price'>$${item.price.toFixed(2)}</p>
        </div>
        <p> Subtotal: <span class='cart-subtotal'>${subtotal.toFixed(2)}</span></p>
        <div class='cart-add-erase'>
          <div class='btn-add-erase'>
            <button type='button' value='decrease' id='cart-decrease'> - </button>
            <span id='qty-items'>1 units</span>
            <button type='button' value='add' id='cart-add'> + </button>
          </div>
          <span class='btn-erase'>
              <i class="fa-solid fa-trash"></i>
          </span>
        </di>
      </div>
    `
    document.querySelector(".cart-fill").appendChild(cartContent)
  })
}



document.addEventListener("DOMContentLoaded", () => {
  loadComponent()
  openMenu()
  closeMenu()
  changeMode()
  openCart()
  closeCart()
  loadProducts(items)
  cartFill()
});
