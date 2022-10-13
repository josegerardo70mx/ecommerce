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