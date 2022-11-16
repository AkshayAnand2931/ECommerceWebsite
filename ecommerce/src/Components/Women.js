import React from 'react'
import data from './data'
import ProductList from './ProductList'

const Women = () => {
  return (
    <div>
        <h1>Women</h1>
        <ProductList data={data}></ProductList>
    </div>
  )
}

export default Women