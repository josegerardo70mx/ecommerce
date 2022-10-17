import {items} from './products.mjs'

const cart = document.getElementById('cart')

export const openCart = () => {
    const btnOpen = document.getElementById('cart-btn')
    btnOpen.addEventListener( 'click', e => {
        cart.classList.add('open')
    })
}

export const closeCart = () => {
    const btnClose = document.getElementById('close-cart')
    btnClose.addEventListener( 'click',e => {
        cart.classList.remove('open')
    })
}

export const cartFill = () => {
    let itemCounter = 0;
    let allItems = 0;
    let subtotal = 0;
    let counter = 1;

    items.forEach(item => {
        const cartContent = document.createElement('div')
        cartContent.classList.add('to-buy')
        cartContent.innerHTML = `
        <!-- Producto cargado desde JS -->
        <div class='cart-item-img'>
            <img src='./${item.image}'>
        </div>
        <div class='cart-item'>
            <!-- Detalles del producto. -->
            <h4>${item.name}</h4>
            <div class='cart-stock-item'>
            <p>Stock: ${item.quantity}</p>
            <hr>
            <p class='item-price'>$${item.price.toFixed(2)}</p>
            </div>
            <p> Subtotal: <span class='cart-subtotal'>${subtotal.toFixed(2)}</span></p>
            <div class='cart-add-erase'>
            <div class='btn-add-erase'>
                <button type='button'  id='cart-decrease'> - </button>
                <span id='qty-items'>1 units</span>
                <button type='button' id='cart-add'> + </butt>
            </div>
            <span class='btn-erase'>
                <i class="fa-solid fa-trash"></i>
            </span>
            </di>
        </div>
    `
        document.querySelector(".cart-fill").appendChild(cartContent)
        counter++
    })

}
// console.log(e.srcElement.value);

export const clearCart = () => {
    const btnClear = document.getElementById('btn-clear')
    btnClear.addEventListener('click', e => {
        const cartItems  = document.getElementById('fill')
        const cartEmpty = document.getElementById('empty')
        cartItems.classList.add('hidden')
        cartEmpty.classList.remove('hidden')
        btnClear.classList.add('disabled')
    })
}


export function moreItems(){
    console.log('hola');
}

