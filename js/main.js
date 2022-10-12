const items = [
    {
      id: 1,
      name: 'Hoodies',
      price: 14.00,
      image: 'assets/images/featured1.png',
      category: 'hoodies',
      quantity: 10
    },
    {
      id: 2,
      name: 'Shirts',
      price: 24.00,
      image: 'assets/images/featured2.png',
      category: 'shirts',
      quantity: 15
    },
    {
      id: 3,
      name: 'Sweatshirts',
      price: 24.00,
      image: 'assets/images/featured3.png',
      category: 'shirts',
      quantity: 20
    }
  ]
const menu = document.getElementById("menu")

const loadComponent = () =>{
    const loader = document.getElementById("loader-container");
    setTimeout( () => {
        loader.classList.add("hide")
    }, 3000)
}
const openMenu = () =>{
  const btnOpen = document.getElementById("menu-open")
  btnOpen.addEventListener("click", e => {
    menu.classList.add("open")
  })
}

const closeMenu = () => {
  const btnClose = document.getElementById("menu-close")
  btnClose.addEventListener( "click", e => {
    menu.classList.remove("open")
  })
}

document.addEventListener("DOMContentLoaded", () => {
  loadComponent();
  openMenu();
  closeMenu();
});
