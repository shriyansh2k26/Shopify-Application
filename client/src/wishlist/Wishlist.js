import React, { useContext } from 'react'
import { CartContext } from '../components/context/CartContext'
import Navbar from '../components/Navbar';

export default function Wishlist() {
  const {wish,deletewish}=useContext(CartContext);
 

  return (

    <>
    <Navbar/>
    <div>
      {wish.map((item)=>{
        return(<>
        
        <div className='flex wish justify-center '>
          <img src={item.image} alt="image" />
          <div>
          <h3>{item.title}</h3>
           <button onClick={()=>{deletewish(item.id,item)}}>REMOVE</button>
          </div>
        </div>
        </>)
      })
      }
      
    </div>
      </>
      )
  
}
