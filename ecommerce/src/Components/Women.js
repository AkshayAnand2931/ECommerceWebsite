import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ProductList from './ProductList'

const Women = () => {

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
        <h1>Women</h1>
        <ProductList data={products}></ProductList>
    </div>
  )
}

export default Women