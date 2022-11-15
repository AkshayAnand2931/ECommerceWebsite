import React from 'react'
import Banner from './Banner'
import data from './data'
import MediaCard from './Prod_Card'
import './style.css'

const Home = () => {
  return (
    <div>
        
        <Banner></Banner>
        <div className='products'>
          {
          data.products.map(product => <div>
              <MediaCard {...product}></MediaCard>
            </div>)
          }
        </div>
    </div>
  )
}

export default Home