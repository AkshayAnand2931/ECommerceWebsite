import React from 'react'
import data from './data'
import ProductList from './ProductList'

const Shoes = () => {
  return (
    <div>
      <h1>Shoes</h1>
      <ProductList data={data}></ProductList>
    </div>
  )
}

export default Shoes
