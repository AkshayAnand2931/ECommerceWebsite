import React from 'react'
import MediaCard from './Prod_Card'
import './style.css'

const ProductList = (props) => {

  if(props.data)
  {
    return (
      <div className='products'>
        {
            props.data.map(product => <div key={props.data.indexOf(product)}>
            <MediaCard {...product}></MediaCard>
          </div>)
        }
      </div>
    )
  }
}

export default ProductList;