import React from 'react'
import MediaCard from './Prod_Card'
import './style.css'

const ProductList = (props) => {
    return (
          <div className='products'>
            {
                props.data.products.map(product => <div>
                <MediaCard {...product}></MediaCard>
              </div>)
            }
          </div>
    )
  }

export default ProductList;