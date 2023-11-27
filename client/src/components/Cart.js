import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar'
import { CartContext } from './context/CartContext'
import { useNavigate } from 'react-router-dom';
import { Badge } from 'antd';
import { AuthContext } from './context/AuthContext';
import { toast } from 'react-toastify'
import Footer from './Footer';
export default function Cart() {
  const { deleteCart, cart, setcart, reduceAmt, increaseAmt } = useContext(CartContext);
  const { auth } = useContext(AuthContext)
  // accessing local storage
  useEffect(() => {
    let existingCart = localStorage.getItem('cart')
    console.log(JSON.parse(existingCart));
    // if(existingCart)setcart(JSON.parse(existingCart))
  }, [])

  const date = new Date();

  let totalamt = 0;
  cart.forEach(element => {
    totalamt = element.amount * element.price + totalamt;
  })
  const navigate = useNavigate();
  const navigateTohome = useNavigate();
  const navigateTologin = useNavigate();
  const navigateToPayment = () => { navigate('/payment') }
  const navigateToHome = () => { navigateTohome('/') }
  const navigateTo = () => { navigateTologin('/login') }
  // handle checkout
  const orders = {
    date: date,
    order: cart,
    total: totalamt
  }
  // console.log(orders)
  // const [token,settoken]=useState()
  const token = auth.token
  const email = auth.email


  const handleCheckOut = async () => {
    if (auth?.token) {
      // navigateToPayment().{
      try {
        const response = await fetch('http://localhost:8000/postorder', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            orders, email
          })
        })
        const data = await response.json()
        if (data) {
          toast.success('Order Placed', {
            position: "top-center",
            autoClose: 1200,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setcart([])
        }
      } catch (error) {
        console.log(error)
      }



    }
    else {
      toast.info('Please Login Before CheckOut', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigateTo()
    }
  }
  return (
    <>
    <div>
      <Navbar />
      <div>

        {
          cart?.length === 0 ? <>
            <div className="empty flex flexclm justify-center item-center">
              <h1 >Cart is empty.Start Shopping</h1>
              <button className='checkout' onClick={() => { navigateToHome() }}>Browse item</button></div></>
            :
            cart.map((item) => {
              return (<>

                <div className='flex wish justify-center cart-ch'>
                  <img src={item.image} alt="image" />
                  <div className='cart-con'>
                    <h3>{item.title}</h3>
                    <h3>${item.price}</h3>
                    <button className='pointer' onClick={() => { deleteCart(item.id) }}>REMOVE</button>
                    <button className='pointer' onClick={() => { increaseAmt(item, item.id) }}>+</button><span>{item.amount}</span><button className='pointer' onClick={() => { reduceAmt(item, item.id) }}>-</button>
                    <h2>Total-${item.price * item.amount}</h2>
                  </div>
                </div>

              </>)
            })}
      </div>
      <div className='fixed'>
        <h3>Total Item  :  {cart.length}</h3>
        <h1>Total Amount  : ${totalamt}</h1>
        <button className='checkout pointer' onClick={handleCheckOut} >CHECKOUT</button>
      </div>
    </div>
      <Footer/>
      </>
    
  )
}

