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

const themeBtn = document.getElementById( 'theme-btn' );
const body = document.body
const shopOpen = document.getElementById( 'shop-btn' )
const shopClose = document.getElementById( 'close-cart' )
const cartContainer = document.getElementById( 'cart-container' )
const allProducts = document.getElementById("products")
const loader = document.getElementById("loader")



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


// UTILIZAR UN METODO FOREACH PARA RECORRER TODO EL ARREGLO DE PRODUCTOS E INSERTAR A CADA UNO CON SU RESPECTIVO VALOR EN EL DOM
items.forEach(element => {

//-------CREATE PRODUCTS ELEMENTS HTML----------------------

const cardProduct = document.createElement("div")
cardProduct.classList.add("card-product")

const productPict = document.createElement("div")
productPict.classList.add("product-pic")

const imageClothes = document.createElement("img")
imageClothes.classList.add("clothes")

const plusBtn = document.createElement("button")
plusBtn.classList.add("plus-btn")
plusBtn.textContent = "+"

const productDescription = document.createElement("div")
productDescription.classList.add("product-description")

const stock = document.createElement("span")

const price = document.createElement("h3")

const name = document.createElement("h4")


//MODIFICACIÓN DE VALOR DE CADA ELEMENTO

imageClothes.src = `${element.image}`
price.textContent = `$${element.price}`
stock.textContent = `| stock:${element.quantity}`
name.textContent = `${element.name}`

//-----INSERTANDO ELEMENTOS AL DOM--------

//METER ELEMENTOS AL CONTENEDOR DE LA IMAGEN
productPict.appendChild(imageClothes)
productPict.appendChild(plusBtn)

//METER ELEMENTOS AL CONTENEDOR DE LA DESCRIPCIÓN
productDescription.appendChild(price)
productDescription.appendChild(stock)
productDescription.appendChild(name)

//METER LOS CONTENEDORES DE IMAGEN Y DESCRIPCION AL CONTENEDOR PRINCIPAL (CARD)
cardProduct.appendChild(productPict)
cardProduct.appendChild(productDescription)

//METER EL CONTENDOR PRINCIPAL (CARD) A LA SECCION
allProducts.appendChild(cardProduct)
});

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

  


 

