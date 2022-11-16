import React from 'react'
import Banner from './Banner'
import data from './data'
import './style.css'
import ProductList from './ProductList'

const Home = () => {
  return (
    <div>
        
        <Banner></Banner>
        <ProductList data={data}></ProductList>
    </div>
  )
}

export default Home