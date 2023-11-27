import React from 'react'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import Section from './components/Section'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className='allbackground'>
      <Navbar/>
    <Slider/>
    <Section/>
    <Footer/>
    </div>
  )
}
