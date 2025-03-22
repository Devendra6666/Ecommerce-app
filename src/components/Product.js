import React, { useState } from 'react'
import '../components/SingleProduct.css'
import { NavLink } from 'react-router-dom'


const Product = ({imgs=[{url : ""}],myname}) => {
    const [photo,setPhoto] = useState(imgs[0])
    // console.log(imgs)

    // const changeimage = () => {
    //     setPhoto(curele)
    // }
  return (
    <> 
    <div className='navigate'>
        <NavLink to="/">
            <button type='button'className='navigate_link'>
                GO TO HOME
            </button>
        </NavLink>
        <h4 className='header_name'>/{myname}</h4>
    </div>
    <div className='products_box'>
       <div className='singleproduct_images'>
        {
            imgs.map((curele,index) => {
                return(
                    <>
                    <div className='single_box'>
            <figure>
            <img className='single_image' src={curele.url} onClick={() => {
                setPhoto(curele)
            }}></img>
            </figure>
        </div> 
                    </>
                )
            })
        }
        {/* <div className='single_box'>
            <figure>
            <img className='single_image' src={props.imgs.url}></img>
            </figure>
        </div> */}
       </div>
       <div className='main-screen'>
        <figure>
            <img className='screenimage' src={ photo.url}></img>
        </figure>
       </div>
    </div>
     </>
  )
  
}

export default Product