const items = [
    {
      id: 1,
      name: 'Hoodies',
      price: 14.00,
      image: 'assets/images/featured1.png',
      category: 'hoodies',
      quantity: 10,
      quantitySelected: 2
    },
    {
      id: 2,
      name: 'Shirts',
      price: 24.00,
      image: 'assets/images/featured2.png',
      category: 'shirts',
      quantity: 15,
      quantitySelected: 2
    },
    {
      id: 3,
      name: 'Sweatshirts',
      price: 24.00,
      image: 'assets/images/featured3.png',
      category: 'shirts',
      quantity: 20,
      quantitySelected: 2
    }
  ]

function sumCart( array ) {
    return sum = array.map( ele => ele.quantitySelected )
}

console.log( sumCart( items ))

function sumCartcash( array ) {
    return sum = array.map( ele => ele.quantitySelected * ele.price ).reduce((a, b) => a + b)
}

console.log( sumCartcash( items ))