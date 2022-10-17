import {items} from './products.mjs'

const cart = document.getElementById('cart')
let allItems = 0;
let choose = 0;
let count1= 1;
let count2= 1;
let count3= 1;
let sub1 = 0
let sub2 = 0
let sub3 = 0


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
            <p> Subtotal: <span class='cart-subtotal' value='${item.id}' id='sub-${item.id}'>$${item.price.toFixed(2)}</span></p>
            <div class='cart-add-erase'>
            <div class='btn-add-erase'>
                <button type='button'  id='cart-decrease' value='${item.id}'> - </button>
                <span><span id='qty-items-${item.id}'>1</span> units</span>
                <button type='button' id='cart-add' value='${item.id}'> + </butt>
            </div>
            <span class='btn-erase'>
                <i class="fa-solid fa-trash"></i>
            </span>
            </di>
        </div>
    `
        document.querySelector(".cart-fill").appendChild(cartContent)
    })
    moreItems()
    lessItems()
}

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


const moreItems = () =>{
    // obtiene todos los elementos button de adición
    let btnAdd = document.querySelectorAll('#cart-add')
    // Le aplica evento click a cada uno de ellos
    btnAdd.forEach(item =>{
        item.addEventListener( 'click', e => {
            choose =  e.srcElement.value;
            switch(choose){
                case '1':
                    let itemNumb = document.getElementById(`qty-items-1`)
                    count1++
                    if(count1 <= items[choose-1].quantity){
                        let subCost = document.getElementById(`sub-${choose}`)
                        let subtotal = items[choose - 1].price * count1
                        subCost.innerHTML= `$${subtotal.toFixed(2)}`
                        itemNumb.innerHTML = `${count1}`
                    }else{
                        alert("No hay mas stock")
                    }
                    break
                case '2':
                    let itemNumb2 = document.getElementById(`qty-items-2`)
                    count2++
                    if (count2 <= items[choose - 1].quantity) {
                        let subCost = document.getElementById(`sub-${choose}`)
                        let subtotal = items[choose - 1].price * count2
                        subCost.innerHTML = `$${subtotal.toFixed(2)}`
                        itemNumb2.innerHTML = `${count2}`
                    } else {
                        alert("No hay mas stock")
                    }
                    break
                case '3':
                    let itemNumb3 = document.getElementById(`qty-items-3`)
                    count3++
                    if (count3 <= items[choose - 1].quantity) {
                        let subCost = document.getElementById(`sub-${choose}`)
                        let subtotal = items[choose - 1].price * count3
                        subCost.innerHTML = `$${subtotal.toFixed(2)}`
                        itemNumb3.innerHTML = `${count3}`
                    } else {
                        alert("No hay mas stock")
                    }
                    break
            }
        })
    })
}


const lessItems = () =>{
    // obtiene todos los elementos button de adición
    let btnAdd = document.querySelectorAll('#cart-decrease')
    // Le aplica evento click a cada uno de ellos
    btnAdd.forEach(item =>{
        item.addEventListener( 'click', e => {
            choose =  e.srcElement.value;
            switch (choose) {
                case '1':
                    let itemNumb = document.getElementById(`qty-items-1`)
                    count1--
                    if (count1 >= 1) {
                        let subCost = document.getElementById(`sub-${choose}`)
                        let subtotal = items[choose - 1].price * count1
                        subCost.innerHTML = `$${subtotal.toFixed(2)}`
                        itemNumb.innerHTML = `${count1}`
                    } else {
                        alert("No se pueden quitar mas items")
                    }
                    break
                case '2':
                    let itemNumb2 = document.getElementById(`qty-items-2`)
                    count2--
                    if (count2 >= 1) {
                        let subCost = document.getElementById(`sub-${choose}`)
                        let subtotal = items[choose - 1].price * count2
                        subCost.innerHTML = `$${subtotal.toFixed(2)}`
                        itemNumb2.innerHTML = `${count2}`
                    } else {
                        alert("No se pueden quitar mas items")
                    }
                    break
                case '3':
                    let itemNumb3 = document.getElementById(`qty-items-3`)
                    count3--
                    if (count3 >= 1) {
                        let subCost = document.getElementById(`sub-${choose}`)
                        let subtotal = items[choose - 1].price * count3
                        subCost.innerHTML = `$${subtotal.toFixed(2)}`
                        itemNumb3.innerHTML = `${count3}`
                    } else {
                        alert("No se pueden quitar mas items")
                    }
                    break
            }
        })
    })
}