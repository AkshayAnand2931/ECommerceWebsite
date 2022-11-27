import React from 'react'
import reducer from './reducer'
import logger from 'use-reducer-logger'
import axios from 'axios'
import { useEffect,useReducer } from 'react'

const Profile = (props) => {
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
      const result = await axios.get(`/api/users/${props.user}`);
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
      <h1>Profile</h1>
      <h2>{products.name}</h2>
    </div>
  )
}

export default Profile
