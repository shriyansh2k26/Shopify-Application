
import React, { useEffect, useState } from "react";
import { createContext } from "react";
export const ProductContext =createContext();

const ProductProvider=({children})=>{
    // product fetch
    const [product,setproduct]=useState([]);
    // fetch product url
    useEffect(()=>{
       const fetch_data=async()=>{
        const response= await fetch('https://fakestoreapi.com/products')
        const data=await response.json();
        setproduct(data);
       }
       fetch_data();
    },[])
  

    return<ProductContext.Provider  value={{product}}>{children}</ProductContext.Provider>
}
export default ProductProvider;