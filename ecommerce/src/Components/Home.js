import React from 'react'
import { useEffect,useReducer } from 'react'
import reducer from './reducer'
import logger from 'use-reducer-logger'
import axios from 'axios'
import Banner from './Banner'
import './style.css'
import ProductList from './ProductList'

const Home = () => {

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
        const result = await axios.get('/api/products');
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
        <Banner></Banner>
        <ProductList data={products}></ProductList>
    </div>
  )
}

export default Home