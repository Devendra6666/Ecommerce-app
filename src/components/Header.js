import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css';
import {  BsFillCartCheckFill } from "react-icons/bs";

const Header = () => {
  return (
     <>
       {/* <button type='button'className='btn btn-primary'>search</button> */}
       <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
   <NavLink to="/" className="navbar-brand"><a class="navbar-brand">Ecommerce App</a></NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <NavLink className="navlink" to="/"><a class="nav-link active" aria-current="page">Home</a></NavLink>
        </li>
        <li class="nav-item">
        <NavLink className="navlink" to="/about"> <a class="nav-link active" aria-current="page"> About</a></NavLink>
        </li>
        <li class="nav-item">
        <NavLink className="navlink" to="/products"><a class="nav-link active" aria-current="page">Products</a></NavLink>
        </li>
        <li class="nav-item">
        <NavLink className="navlink" to="/contact"><a class="nav-link active" aria-current="page">Contact</a></NavLink>
        </li>
        <li class="nav-item">
        <NavLink className="navlink" to="/cart"><a class="nav-link active" aria-current="page"><BsFillCartCheckFill className='shopping-icon'></BsFillCartCheckFill>
        <span className='shoppingitems-count'>10</span>
        </a></NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
     </>
  )
}

export default Header