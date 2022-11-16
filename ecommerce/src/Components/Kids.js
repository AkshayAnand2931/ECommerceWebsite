import React from 'react'
import data from './data'
import ProductList from './ProductList'

const Kids = () => {
  return (
    <div>
        <h1>Kids</h1>
        <ProductList data={data}></ProductList>
    </div>
  )
}

export default Kids