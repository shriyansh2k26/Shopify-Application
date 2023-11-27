import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../context/ProductContext'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../Navbar';
import { CartContext } from '../context/CartContext';

export default function ProductDetail() {
  const {idP}=useParams();
  console.log(idP);
const {product}=useContext(ProductContext);
const single=product.filter((item)=>{
  return item.id==idP;
});


const navigate=useNavigate()
const {addTocart}=useContext(CartContext);
const navi=(item,id)=>{
  addTocart(item,id);
  navigate('/cart')
}


  return (
    <>
    <Navbar/>
 <div className="container1">
  {
  
   single.map((item)=>{
    return (
      <>
        <div className="product-image">
            <img src={item.image} alt="Product Image"/>
        </div>
        <div className="product-details">
            <h1>{item.title} </h1>
            <p className="price">${item.price}</p>
            <div className="buy-now">
                <button onClick={()=>navi(item,item.id)}>Buy Now</button>
            </div>
            <p className="description">{item.description}</p>
        </div>

      </>
    )
  })
}

</div>
    </>
  
  )
}
