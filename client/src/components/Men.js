import React from 'react'
import Navbar from './Navbar'
import Slider from './Slider'
import Mens_product from '../components/products/Mens_product'
import Footer from './Footer'

export default function Men() {
  return (
    <div className='allbackground'>
      <Navbar/>
      <Slider/>
      <Mens_product/>
      <Footer/>
    </div>
  )
}
