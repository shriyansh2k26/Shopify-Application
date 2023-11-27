import React from 'react'
import Navbar from './Navbar'
import Slider from './Slider'
import Women_product from './products/Women_product'
import Footer from './Footer'

export default function Women() {
  return (
    <div className='allbackground'>
      <Navbar/>
      <Slider/>
    <Women_product/>
      <Footer/>
    </div>
  )
}
