import React from 'react'
import './Footer.css';
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
     <>
      <section className='footer-box shadow'>
        <div className='box-content'>
            <p>Ready to get started ?</p>
            <p>Talk to us..</p>
        </div>
        <div className='box-button'>
            <NavLink to="/contact">
                <button type='button'className='navigatebtn'>Get started</button>
            </NavLink>
        </div>
      </section>

      {/* main footer section */}
      <div className='footer'>
        <div className='footer-about'>
            <p>Trad-E shopping</p>
            <p>shop your exciting deals in our store,<br></br>Exclusive offers on purchase</p>
        </div>
        <div className='footer-content'>
            <p>Get notified to get all updates</p>
            <form>
                <input type='text'placeholder='YOUR EMAIL'></input>
                <NavLink to="/contact"><button type='button'className='contactbtn'>SUBSCRIBE</button></NavLink>
            </form>
            <div className='footer-footer'>
            <p>@2023 Ecommerce Trade-E</p>
            <p>All Rights Reserved</p>
            </div>
        </div>
        <div className='footer-icons'>
            <p>Follow Us on</p>
            <div className='footericons-section'>
            <i class="fa-brands fa-github"></i>
            <i class="fa-brands fa-square-instagram"></i>
            <i class="fa-brands fa-linkedin"></i>
            </div>
            <p>@Privacy Policy</p>
            <p>Terms and Coditions</p>
        </div>
        <div className='footer-contact'>
            <p>Call Us</p>
            <p>+91 7981222394</p>
        </div>
        {/* <hr className='line'></hr> */}
      </div>
     </>
  )
}

export default Footer