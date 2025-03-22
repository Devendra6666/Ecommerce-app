import React from 'react'
import { useProductContext } from '../context/ProductContext'
import './FeaturedProducts.css'
import { NavLink } from 'react-router-dom';

const FeatruedProducts = () => {
    const {isLoading, featureProducts} = useProductContext();
    // console.log(featureProducts)

    if(isLoading){
      return(
        <>
       <h1 className='productloading'> Loading...</h1> 
        </>
      )
    }
  return (
    <>
      <div className='featuredsection'>
         <div className='featured-content'>
            <p>Check Now !</p>
            <h4>Our Featured Services</h4>
         </div>
          <div className='featured-images'>
            {
                featureProducts.map((curEle,index) => {
                    return(
                        <>
                          <div className='box'>
                <figure>
                    <NavLink to={`/singleproduct/${curEle.id}`}>
                        <img className='featuredimage' src={curEle.image} key={index} alt='my element'></img>
                    </NavLink>
                <div className='image-about'>
                    <p className='image_para'>{curEle.name}</p>
                    <p className='image_para'>{curEle.price}</p>
                </div>
                    <figcaption className='image-caption'>{curEle.category}</figcaption>
                
                </figure>
            </div>
                        </>
                    )
                })
            }
            
            
          </div>
      </div>
    </>
  )
}

export default FeatruedProducts;