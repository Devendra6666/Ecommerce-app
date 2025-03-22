import React from 'react'
import './Services.css'
// import { BsBusFrontFill } from "react-icons/bs";
// import { AiFillAccountBook } from "react-icons/ai";

const Services = () => {
  return (
     <>
       <div className='containerfluid'>
        <div className='first-box'>
            <div className='content-first'>
                 {/* <  AiFillAccountBook></  AiFillAccountBook> */}
                  <div className='icon'>
                  <i class="fa-solid fa-bus-simple bus-icon"></i>
                  </div>
                 <p>Super Fast and Free Delivery</p>
            </div>
        </div>
        <div className='second-box'>
             
                <div className='firstbox'>
                    <div className='icon'>
                    <i class="fa-solid fa-shield-halved"></i>
                    </div>
                    <p>Non-Contact Shipping</p> 
                </div>
                <div className='secondbox'>
                    <div className='icon'>
                    <i class="fa-solid fa-money-bill-wheat"></i>
                    </div>
                   <p> Money Back Guareented</p>
                </div>
            
        </div>
        <div className='first-box'>
            <div className='content-first'>
                 {/* <  AiFillAccountBook></  AiFillAccountBook> */}
                  <div className='icon'>
                  <i class="fa-brands fa-paypal bus-icon"></i>
                  </div>
                 <p>Super Secure Payment System</p>
            </div>
        </div>
        </div>
     
     </>
  )
}

export default Services