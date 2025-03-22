import React from 'react'
import { NavLink } from 'react-router-dom'
import './GridView.css'

const GridView = ({gridproducts}) => {
    // console.log(gridproducts)
  return (
     <>
      <div className='gridcontainer'>
        {
            gridproducts.map((curimg,index) => {
                return(
                    <>
                    <NavLink to={`/singleProduct/${curimg.id}`}> 
                    <figure> 
                    <img className='singleproduct-image' src={curimg.image}></img>
                    <button type='button'className='button_caption'>
                    <figcaption>{curimg.category}</figcaption>
                    </button>
                    
                    <div className='singleimage_content'>
                        <p>{curimg.name}</p>
                        <p>{curimg.price}</p>
                    </div>
                    </figure>
                    </NavLink>
                    </>
                )
            })
        }
      </div>
     </>
  )
}

export default GridView