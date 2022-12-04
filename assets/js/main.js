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

themeBtn.addEventListener( 'click', e => {
  body.classList.toggle('darktheme')

  if( themeBtn.classList.contains( 'bx-moon' )){
    themeBtn.classList.replace( 'bx-moon', 'bx-sun' )
  }else{
    themeBtn.classList.replace( 'bx-sun', 'bx-moon' )
    }
  })

shopOpen.addEventListener( 'click', e => {
  cartContainer.classList.remove( 'hide' )
})

shopClose.addEventListener( 'click', e => {
  cartContainer.classList.add( 'hide' )
})

window.addEventListener('scroll', () => {
  document.querySelector('header').classList.toggle('scroll-bar', window.scrollY > 0)
  })


