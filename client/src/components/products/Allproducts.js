
import React, { useState } from 'react';
import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext'
import { Link,useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import {toast } from 'react-toastify'
export default function Allproducts() {
    let  { product } = useContext(ProductContext);
    let {cart }=useContext(CartContext)
   const navigate=useNavigate();
   const select=(id)=>{
    navigate(`/product/${id}`);
   }
//    checkd box
let [radio,setradio]=useState('asc')
   const {addTowish,addTocart}=useContext(CartContext);
//    ascending items
   const ascendingItem=[...product].sort((a, b) => a.id - b.id)
  
// descending items
   const numDescending = [...product].sort((a, b) => b.id - a.id);
//     a to z
const stringAscending = [...product].sort((a, b) =>
a.title > b.title ? 1 : -1,
);
// z to a
const stringDescending = [...product].sort((a, b) =>
a.title > b.title ? -1 : 1,
);

//    mapping items
if(radio=='asc'){
    product=ascendingItem;
}
else if(radio=='dsc'){
    product=numDescending;
}
else if(radio=='atoz'){
    product=stringAscending;
}
else if(radio=='ztoa'){
    product=stringDescending;
}


    return (
        <div className='product'>
               <div className="container-flt">
                <h1>Filter</h1>
                            <div className="input-flt flex item-center">
                                <input type="radio"   onClick={()=>{setradio('asc')}}name='radio' id='1' value={"asc"}  />
                                <label htmlFor="1" onClick={()=>{setradio('asc')}} >Ascending</label>
                            </div>
                            <div className="input-flt flex item-center">
                                <input type="radio" onClick={()=>{setradio('dsc')}} name='radio' id='2' value={"dsc"} />
                                <label htmlFor="2" onClick={()=>{setradio('dsc')}}>Descending</label>
                            </div>
                            <div className="input-flt flex item-center">
                                <input type="radio" onClick={()=>{setradio('atoz')}} id='3' name='radio'  value={"atoz"} />
                                <label htmlFor="3" onClick={()=>{setradio('atoz')}}>A to Z</label>
                            </div>
                            <div className="input-flt flex item-center">
                                <input type="radio" onClick={()=>{setradio('ztoa')}} id='4' name='radio'  value={"ztoa"} />
                                <label htmlFor="4" onClick={()=>{setradio('ztoa')}}>Z to A</label>
                            </div>
                            <button onClick={()=>{setradio('')}} className='pointer'>Reset</button>
                        </div>
            <div className="display">
              
                {product.map((item) => {
                    return (
                        <>
                        <div class="card">
                            <div   onClick={()=>{select(item.id)}}>

                            <img src={item.image} alt="Product Image" />
                            <h2>{item.title}</h2>
                            </div>
                       
                           
                             <div className="flex flexclm justify-center item-center">
                              
                            {/* <button onClick={()=>{addTowish(item,item.id)}}>Wishlist</button> */}
                            <span>${item.price}</span>
                           <button onClick={()=>{
                                addTocart(item,item.id);
                               
                               
                            }}>ADD TO CART</button>
                        </div>
                        </div>
                        </>
                    );
                })}
            </div>
        </div>
    );
}

