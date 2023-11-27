import {  createContext, useEffect, useState } from "react"
import { AiOutlineHeart } from "react-icons/ai"; 
import { toast } from "react-toastify";
// import { ProductContext } from "./ProductContext";
export const CartContext = createContext();
const CartProvider = ({ children }) => {

    const [wish, setwish] = useState([]);
    const [cart, setcart] = useState([]);

    // ....................................ADD ITEM TO CART.....................................................

    const addTocart = (item, id) => {
        
        const newItem = { amount: 1, ...item }

        //   checking if item is already there
        const cartItem = cart.find((item) => {
            return item.id === id;
        })
        

        if (cartItem) {
            toast.info('Item already in cart', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            // const newCart = [...cart].map((item) => {
            //     if (item.id === id) {
            //         return { ...item, amount: cartItem.amount + 1 };
            //     }
            //     else {
            //         return item;
            //     }
            // });
            // setcart(newCart)
            // localStorage.setItem('cart',JSON.stringify([newCart]))
         
        } else {
            setcart([...cart, newItem]);
            localStorage.setItem('cart',JSON.stringify([...cart,newItem]))
            toast.success('Item added to cart', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
                
        }
    }
    //   ...................................................delete Cart.......................................
    const deleteCart = (id) => {
        let newcart=cart.filter((item) => {
            return id !== item.id;
        })
        setcart(newcart)
        localStorage.setItem('cart',JSON.stringify(newcart))
    }
    const reduceAmt = (item, id) => {
        console.log(item.amount)
        if (item.amount === 1) {
            deleteCart(id);
            // console.log("hello")
        }
        else {

            const newItem = { amount: 1, ...item }
            const cartItem = cart.find((item) => {
                return item.id === id;
            })
            // console.log(cartItem)

            if (cartItem) {
                const newCart = [...cart].map((item) => {
                    if (item.id === id) {
                        return { ...item, amount: cartItem.amount - 1 };
                    }
                    else {
                        return item;
                    }
                });
                setcart(newCart)
                localStorage.setItem('cart',JSON.stringify([newCart]))
        
            } else {
                setcart([...cart, newItem])
                localStorage.setItem('cart',JSON.stringify([...cart,newItem]))
             
        
            }
        }
    }
    //     /....................................increase amount...............................................
    const increaseAmt = (item, id) => {
        
        const cartItem = cart.find((item) => {
            return item.id === id;
        })

        if (cartItem) {
            const newCart = [...cart].map((item) => {
                if (item.id === id) {
                    return { ...item, amount: cartItem.amount + 1 };
                }

                else {
                    return item;
                }
            });
            setcart(newCart)
            localStorage.setItem('cart',JSON.stringify([newCart]))
        
        }

    }


    // ................................................wishlish............................................

    const [check,setcheck]=useState(false);
    const deletewish = (id, item) => {
        setwish(() => {
            return wish.filter((item) => {
                return id !== item.id;
            })
        })
    }
    
        const addTowish = (item, id) => {
            // const newItem = { amount: 1, ...item }
        
            // //   checking if item is already there
            // const wishItem = wish.find((item) => {
            //     return item.id === id;
            // })
          setcheck(!check);
            if(check){
            setwish([...wish, item])
          return    <AiOutlineHeart className="heart-clr-red"/>       
        }
            
            else{
              deletewish(id,item); 
              return <AiOutlineHeart className="heart-clr-white"/>        
        }
            
            
            // if (wishItem) {
                
            // } 
            // else {
               
            // }
        }
    
    return (<CartContext.Provider value={{addTocart, wish, deleteCart, cart,setcart, addTowish, deletewish, reduceAmt, increaseAmt }}>
        {children}
    </CartContext.Provider>)
}
export default CartProvider;