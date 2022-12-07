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
const menuOpen = document.getElementById( 'menu-btn' )
const menuClose = document.getElementById( 'menu-close' )
const cartContainer = document.getElementById( 'cart-container' )
const boxContainer = document.getElementById( 'container-box' )
const allProducts = document.getElementById("products")
const loader = document.getElementById("loader")
const btnPlus1 = document.getElementById("plus-1")
const btnPlus2 = document.getElementById("plus-2")
const btnPlus3 = document.getElementById("plus-3")
const total = document.getElementById("total-prices");
const home = document.getElementById("home")
const prod = document.getElementById("prod")
const btnSum = document.getElementById ( 'add' )
const emptyCart = document.getElementById("empty-cart")
const content = document.getElementById("cart-content");


//CHANGE THEME

themeBtn.addEventListener( 'click', e => {
  body.classList.toggle('darktheme')

  if( themeBtn.classList.contains( 'bx-moon' )){
    themeBtn.classList.replace( 'bx-moon', 'bx-sun' )
  }else{
    themeBtn.classList.replace( 'bx-sun', 'bx-moon' )
    }
  })

//OPEN VENTANAS

shopOpen.addEventListener( 'click', e => {
  cartContainer.classList.remove( 'hide' )

})

menuOpen.addEventListener( 'click', e => {
  boxContainer.classList.remove( 'hide' )
})


//CLOSE VENTANAS

shopClose.addEventListener( 'click', e => {
  cartContainer.classList.add( 'hide' )
})

menuClose.addEventListener( 'click', e => {
  boxContainer.classList.add( 'hide' )
})

home.addEventListener( 'click', e => {
  boxContainer.classList.add( 'hide' )
})

prod.addEventListener( 'click', e => {
  boxContainer.classList.add( 'hide' )
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



function sumCart( array ) {
    return sum = array.map( ele => ele.quantitySelected ).reduce((a, b) => a + b)
}

function sumCartcash( array ) {
    return sum = array.map( ele => ele.quantitySelected * ele.price ).reduce((a, b) => a + b)
}


function addProduct( itemId ) {
  //verificar si existe

  let productSelected = cartProducts.find( product => product.id === itemId)

  if (productSelected) { // !== undefined es decir que existe
    if (productSelected.quantitySelected < productSelected.quantity) { //condicion para saber si la cantidad selecionada no excede al stock
      let index = cartProducts.indexOf(productSelected);
      cartProducts[index].quantitySelected++
    } else{
      alert("¡No puede agregar mas productos porque ya no hay en stock!")
    }
    

  } else{

    const item = items.find(item => item.id === itemId)
    item.quantitySelected = 1;
    cartProducts.push(item);
    
  }



  showProducts()

document.getElementById( 'shop-counter' ).innerHTML = sumCart( cartProducts )
document.getElementById( 'total-items' ).innerHTML = sumCart( cartProducts )
document.getElementById( 'total-prices' ).innerHTML = sumCartcash( cartProducts )

}


function removeProducts(itemId) {
  let productSelected = cartProducts.find(product => product.id === itemId)
  let index = cartProducts.indexOf(productSelected)

  if (productSelected.quantitySelected > 1) {
    cartProducts[index].quantitySelected--;

  } 

  showProducts();

  document.getElementById("shop-counter").innerHTML = sumCart(cartProducts);
  document.getElementById("total-items").innerHTML = sumCart(cartProducts);
  document.getElementById("total-prices").innerHTML = sumCartcash(cartProducts);


}


function rmAll( itemId ){
  let productSelected = cartProducts.find(product => product.id === itemId);
  let index = cartProducts.indexOf(productSelected);
  cartProducts.splice(index, 1);
  
  if ( cartProducts.length === 0 ){

      document.getElementById( 'shop-counter' ).innerHTML = '0';
      document.getElementById( 'total-items' ).innerHTML = '0';
      document.getElementById( 'total-prices' ).innerHTML = '0';
      content.innerHTML = `
      <section class="empty-cart">
      <img  class="empty-cart-img" src="./assets/images/empty-cart.png" alt="empty-cart">
      <div class="text-empty-cart">
        <h4>Your cart is empty</h4><br>
        <p class="text-empty">You can add items to your cart by clicking on the '+' button on the product page.</p>
      </div>
  
    </section>`
      
      
      
     
  }else{
      showProducts()
      
      document.getElementById( 'shop-counter' ).innerHTML = sumCart( cartProducts );
      document.getElementById( 'total-items' ).innerHTML = sumCart( cartProducts );
      document.getElementById( 'total-prices' ).innerHTML = sumCartcash( cartProducts );
  }
  
}



function showProducts() {
  
  let fragment = ""
  cartProducts.forEach( product => {
  fragment += `
  <!-- Carta inicio -->
  <section class="card-cart">
    <div class="image-product-container">
      <img src="${product.image}" alt="#" class="cart-product-img">
    </div>

    <div class="cart-texts">
      <p class="cart-name">"${product.name}"</p>
      <p class="cart-stock">Stock: ${product.quantity}| <span>$${product.price}</span> </p>
      <p class="cart-subtotal">Subtotal: $${product.quantitySelected * product.price}</p>

      <div class="cart-buttons">
        <button onclick="addProduct(${product.id})" id="add" class="add button-styles">+</button>
        <span class="quantity-unit">${product.quantitySelected} units</span>
        <button onclick="removeProducts(${product.id})" class="remove button-styles">-</button>
        <button onclick="rmAll(${product.id})" class="remove-all button-styles"><i class='bx bx-block'></i></button>
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



