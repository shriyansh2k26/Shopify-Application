import React from 'react'

import { useContext ,useState} from 'react'
import { ProductContext } from '../context/ProductContext'

import { Link, useNavigate } from 'react-router-dom';

import { CartContext } from '../context/CartContext';
import { toast } from 'react-toastify';

export default function Mens_product() {
  const { product } = useContext(ProductContext);
  // console.log(product);
  const MenProduct = product.filter((items) => {
      return items.category === "men's clothing";
  });
const navigate=useNavigate();
const selected=(id)=>{
  navigate(`/product/${id}`);
}
const {addTowish,addTocart}=useContext(CartContext);

  return (
    <div className='product'>

            <div className="display">
               {
                MenProduct.map((item)=>{
                  return(
                    <>
 
                    <div class="card">
                            <div   onClick={()=>{selected(item.id)}}>

                            <img src={item.image} alt="Product Image" />
                            <h2>{item.title}</h2>
                            </div>
                            {/* <p>{item.description}</p> */}
                           
                             <div className="flex flexclm justify-center item-center">
                              
                            {/* <button onClick={()=>{addTowish(item,item.id)}}>Wishlist</button> */}
                            <span>${item.price}</span>
                           <button onClick={()=>{
                               
                                addTocart(item,item.id);
                               
                            }}>ADD TO CART</button>
                        </div>
                        </div></>
                    )
                })
               }
        </div>
    </div>
  )
}
