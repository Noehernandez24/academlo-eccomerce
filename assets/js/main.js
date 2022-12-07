const items = [
    {
      id: 1,
      name: 'Hoodies',
      price: 14.00,
      image: 'assets/images/featured1.png',
      category: 'hoodies',
      quantity: 10,
      quantitySelected: 0
    },
    {
      id: 2,
      name: 'Shirts',
      price: 24.00,
      image: 'assets/images/featured2.png',
      category: 'shirts',
      quantity: 15,
      quantitySelected: 0
    },
    {
      id: 3,
      name: 'Sweatshirts',
      price: 24.00,
      image: 'assets/images/featured3.png',
      category: 'shirts',
      quantity: 20,
      quantitySelected: 0
    }
  ]

const themeBtn = document.getElementById( 'theme-btn' );
const body = document.body
const shopOpen = document.getElementById( 'shop-btn' )
const shopClose = document.getElementById( 'close-cart' )
const cartContainer = document.getElementById( 'cart-container' )
const allProducts = document.getElementById("products")
const loader = document.getElementById("loader")
const btnPlus1 = document.getElementById("plus-1")
const btnPlus2 = document.getElementById("plus-2")
const btnPlus3 = document.getElementById("plus-3")
const total = document.getElementById("total-prices");





//CHANGE THEME

themeBtn.addEventListener( 'click', e => {
  body.classList.toggle('darktheme')

  if( themeBtn.classList.contains( 'bx-moon' )){
    themeBtn.classList.replace( 'bx-moon', 'bx-sun' )
  }else{
    themeBtn.classList.replace( 'bx-sun', 'bx-moon' )
    }
  })

//OPEN CART

shopOpen.addEventListener( 'click', e => {
  cartContainer.classList.remove( 'hide' )
})

//CLOSE CART

shopClose.addEventListener( 'click', e => {
  cartContainer.classList.add( 'hide' )
})

//NAVBAR SCROLL

window.addEventListener('scroll', () => {
  document.querySelector('header').classList.toggle('scroll-bar', window.scrollY > 0)
  })


//LOADER

const loaderComponent = () =>{

  const loader = document.getElementById("loader")
  
  setTimeout(() =>{
      loader.classList.add("hide");
  }, 2500)
  
}

document.addEventListener("DOMContentLoaded", () => {

  loaderComponent();

})

//AÑADIR PRODUCTOS

const cartProducts = []

function addProduct(itemId) {
  //verificar si existe

  let productSelected = cartProducts.find(product => product.id === itemId)

  if (productSelected) { // !== undefined es decir que existe
    
    let index = cartProducts.indexOf(productSelected);
    cartProducts[index].quantitySelected++

  } else{

    const item = items.find(item => item.id === itemId)
    item.quantitySelected = 1;
    cartProducts.push(item);
    
  }
  showProducts()

}

function showProducts() {
  const content = document.getElementById("cart-content");
  let fragment = ""
  cartProducts.forEach(product => {
  fragment += `
  <!-- Carta inicio -->
  <section class="card-cart">
    <div class="image-product-container">
      <img src="${product.image}" alt="#" class="cart-product-img">
    </div>

    <div class="cart-texts">
      <p class="cart-name">"${product.name}"</p>
      <p class="cart-stock">Stock: ${product.quantity}| <span>$${product.price}</span> </p>
      <p class="cart-subtotal">Subtotal: $${0.00}</p>

      <div class="cart-buttons">
        <button class="add button-styles">+</button>
        <span class="quantity-unit">${product.quantitySelected} units</span>
        <button class="remove button-styles">-</button>
        <button class="remove-all button-styles"><i class='bx bx-block'></i></button>
      </div>

    </div>
  </section>
  <!-- Carta final -->
  `
 })

 content.innerHTML = fragment
}

btnPlus1.addEventListener("click", (e) =>{
  addProduct(1)
})

btnPlus2.addEventListener("click", (e) =>{
  addProduct(2)
})

btnPlus3.addEventListener("click", (e) =>{
  addProduct(3)
})

