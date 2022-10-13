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

// Animacion de carga del website.
const loadComponent = () =>{
    const loader = document.getElementById("loader-container");
    setTimeout( () => {
        loader.classList.add("hide")
    }, 3000)
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


document.addEventListener("DOMContentLoaded", () => {
  loadComponent();
  openMenu();
  closeMenu();
  changeMode();
});
