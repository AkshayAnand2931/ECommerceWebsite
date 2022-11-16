import React from 'react'
import MediaCard from './Prod_Card'
import './style.css'

const ProductList = (props) => {
    return (
          <div className='products'>
            {
                props.data.products.map(product => <div key={props.data.products.indexOf(product)}>
                <MediaCard {...product}></MediaCard>
              </div>)
            }
          </div>
    )
  }

export default ProductList;