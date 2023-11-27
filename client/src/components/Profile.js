import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from './context/AuthContext'
import Navbar from './Navbar';
export default function Profile() {
  const { auth, setauth } = useContext(AuthContext);
  const [order, setOrder] = useState([])
  useEffect(() => {
    const fetch_order = async () => {
      const response = await fetch('https://shopifyserver.onrender.com/getorder', {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await response.json();
      setOrder(data.order)
      // console.log()
    }
    fetch_order()
  }, [])
  // console.log(order)
  const [finalorder, setfinalorder] = useState([])

  useEffect(() => {
    const userOrder = order.find((item) => item.email === auth.email);

    if (userOrder) {
      const { orders } = userOrder;
      setfinalorder(orders || []); // Set an empty array if previousorder is undefined
    }
  }, [order, auth.email])
  console.log(finalorder)
  return (
    <div>
      <Navbar />
      
        <h1>Order History</h1>
      

      <section id="order-list">
        <div class="order">
          <div class="order-header">
            {/* <span class="order-number">#12345</span> */}
            {/* <span class="order-date">Date: 2023-11-24</span> */}
          </div>
          <div class="order-details">
            {
              finalorder.map((item) => {
                return <>
                  <h1>{item.date}</h1>
                  {
              
                    item.order.map((item) => {
                      return <>
                        <div className='flex wish justify-center cart-ch'>
                          <img src={item.image} alt="image" />
                          <div className='cart-con'>
                            <h3>{item.title}</h3>
                            <h3>${item.price}</h3>
                            <h2>Amount:{item.amount}</h2>
                          </div>
                        </div>
                      </>
                    })
                  }
                  <h2>Total Amount: ${item.total}</h2>
                </>
              })
            }
            
          </div>
          <div class="order-status">
            {/* <span class="status">Status: Shipped</span> */}
          </div>
        </div>



      </section>

      <footer>
        <p>&copy; 2023 Your Company Name</p>
      </footer>
    </div>
  )
}
