import { AiOutlineHeart } from "react-icons/ai";
import React from 'react';
import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext'
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { useState } from "react";
import { toast } from 'react-toastify';
export default function Women_product() {
    const { product } = useContext(ProductContext);
    const WomenProduct = product.filter((items) => {
        return items.category === "women's clothing";
    });

    const navigate = useNavigate();
    const selected = (id) => {
        navigate(`/product/${id}`);
    }
    const { addTowish, addTocart } = useContext(CartContext);
    

    return (
<>
            
        <div className="display">
            {WomenProduct.map((item) => {
                return (
                    <>
                 
                    <div key={item.id} className="card">
                            
                        <div onClick={() => { selected(item.id) }}>

                            <img src={item.image} alt="Product Image" />
                            <h2>{item.title}</h2>
                        </div>
                        {/* <p>{item.description}</p> */}

                        <div className="flex flexclm justify-center item-center">

                            {/* <button onClick={()=>{addTowish(item,item.id)}}>Wishlist</button> */}
                            <span>${item.price}</span>
                            <div>
                                {/* <AiOutlineHeart className="heart" onClick={() => { addTowish(item, item.id) }} /> */}
                                <button onClick={() => {
                                  
                                    addTocart(item, item.id);
                                   
                                }}>ADD TO CART</button>

                            </div>
                        </div>
                    </div></>
                );
            })}
        </div>
        </>
    );
}

