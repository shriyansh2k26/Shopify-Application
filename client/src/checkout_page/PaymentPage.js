import { BiExit } from "react-icons/bi"; 
import { TiTick } from "react-icons/ti"; 
import React from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react'

export default function PaymentPage() {
  const [showPop,setshowPop]=useState(false);
  const PaymentPopup=()=>{
    return <>
    <div className="popup-wrapper flex justify-center item-center">
    <div className="popup-container ">
    <BiExit onClick={()=>{setshowPop(false)}} className="icons-exit pointer" />
    <div className="justify-center item-center flex flexclm ">
    <h2>Payment successful</h2>
    <TiTick className="icons-tick"/>
    </div>
    </div>
    </div>
    </>
  }
  return (
    <>
    {/* <Navbar/> */}
    <div class="payment">
    <h2>Payment Details</h2>
    <form class="payment-form">
      <div class="form-group">
        <label htmlFor="card-number">Card Number</label>
        <input type="text" id="card-number" name="card-number" placeholder="Enter your card number" required/>
      </div>
      <div class="form-group">
        <label htmlFor="expiration">Expiration Date</label>
        <input type="text" id="expiration" name="expiration" placeholder="MM/YY" required/>
      </div>
      <div class="form-group">
        <label htmlFor="cvv">CVV</label>
        <input type="number" id="cvv" name="cvv" placeholder="Enter CVV" required/>
      </div>
      <div class="form-group">
        <label htmlFor="card-holder">Card Holder</label>
        <input type="text" id="card-holder" name="card-holder" placeholder="Enter card holder's name" required/>
      </div>
    </form>
    <h2>OR</h2>
    <hr />
    <form className='upi'>
        <label htmlhtmlFor="upi">UPI</label>
        <input type="text" name="upi" placeholder='Enter valid UPI' />
    </form>
    <br />
      <button onClick={()=>{setshowPop(true)}} type="submit">Make Payment</button>
  </div>
  {showPop&& <PaymentPopup/>}
  </>
  )
}
