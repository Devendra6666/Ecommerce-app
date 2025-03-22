import React from 'react'
// import hero from '']
import './Herosection.css';
import { NavLink } from 'react-router-dom';
// import { Button } from '../styles/Button';

const object = {
    color:'purple',
    fontSize : '15px',
    fontVariant : 'smallCaps',
    fontSize : '20px'
}

const Herosection = (props) => {
  return (
    <div className='container'>
        <div className='hero-section-content'>
            <p style={object}>Welcome to </p>
            <h2>{props.myData.value}</h2>
            <p className='content-matter'>Shop According to your requirements and needs,fullfill your desires<br/> with our ecommerce store and not to let you back,always encourage<br/>Ready to shop all through the way..</p>
            <NavLink to='/'>
                 <button type='button'className='btn-shopping'>SHOP NOW</button>
            </NavLink>
        </div>
        <div className='hero-section-image'>
            <figure>
                <img className='hero-image' src='images/hero.jpg' alt="my hero image logo"></img>
            </figure>
        </div>
    </div>
  )
}

export default Herosection