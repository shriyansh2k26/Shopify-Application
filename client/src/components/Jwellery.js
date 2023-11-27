import React from 'react'
import Navbar from './Navbar'
import Jwellery_product from './products/Jwellery_product'
import Slider from './Slider'
import Footer  from './Footer'
export default function Jwellery() {
  return (
    <div className='allbackground'>
      
        <Navbar/>
        <Slider/>
        <Jwellery_product/>
        <Footer/>
    </div>
  )
}
