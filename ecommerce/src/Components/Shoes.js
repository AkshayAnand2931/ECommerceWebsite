import React from 'react'
import { useEffect, useState,useReducer } from 'react'
import axios from 'axios'
import ProductList from './ProductList'
import reducer from './reducer'
import logger from 'use-reducer-logger'

const Shoes = () => {

  const [{loading,error,products},dispatch] = useReducer(logger(reducer),
    {
      products:[],
      loading:true,
      error:''
    })
    
  useEffect(()=>
  {
    const fetchData = async () =>
    {
      dispatch({type:'FETCH_REQUEST'});
      try
      {
        const result = await axios.get('/api/products/shoes');
        dispatch({type:'FETCH_SUCCESS',payload: result.data})
      }
      catch(err)
      {
        dispatch({type:'FETCH_FAIL',payload: err.message})
      }
    }
    fetchData();
  },[]);

  return (
    <div>
      <h1>Shoes</h1>
      <ProductList data={products}></ProductList>
    </div>
  )
}

export default Shoes
