import React from 'react'
import data from './data'
import ProductList from './ProductList'

const Men = () => {
  return (
    <div>
        <h1>Men</h1>
        <ProductList data={data}></ProductList>
    </div>
  )
}

export default Men