import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Banner from './Banner'
import './style.css'
import ProductList from './ProductList'

const Home = () => {

  const [products,setProducts] = useState([]);
  useEffect(()=>
  {
    const fetchData = async () =>
    {
      const result = await axios.get('/api/products');
      setProducts(result.data);
    }
    fetchData();
  },[]);

  return (
    <div>
        <Banner></Banner>
        <ProductList data={products}></ProductList>
    </div>
  )
}

export default Home