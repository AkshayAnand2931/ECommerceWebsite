import React from 'react'
import { useEffect, useState,useReducer } from 'react'
import axios from 'axios'
import ProductList from './ProductList'
import reducer from './reducer'
import logger from 'use-reducer-logger'

const Search = (props) => {

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
          const result = await axios.get(`/api/search/${props.query}`);
          dispatch({type:'FETCH_SUCCESS',payload: result.data})
        }
        catch(err)
        {
          dispatch({type:'FETCH_FAIL',payload: err.message})
        }
      }
      fetchData();
    },[]);
    if(products.length === 0)
    {
        return(
            <div>
                <h1>No products matching the given search</h1>
            </div>
        )
    }
    return (
      <div>
          <h1>Search</h1>
          <ProductList data={products}></ProductList>
      </div>
    )
  }

export default Search;