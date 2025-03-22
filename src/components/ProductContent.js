import React, { useState } from 'react'
import '../components/Single.css'
import { FaCheck } from "react-icons/fa";
import { AiOutlineMinus } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
// import { useCartContext } from '../context/cart_context';
import { useCartContext } from '../context/Cart_context';

const ProductContent = ({mycontent,mycolors=[]}) => {
    const {addtocart} = useCartContext()
    const [colour, setColour] = useState(mycolors[0])
    const [value, setValue] = useState(1)
    const {name,image,category,reviews,price,description,stock,id,company} = mycontent
    // console.log(mycolors)
    // console.log(name,category)

    const increment =() =>{ 
        stock > value?setValue(value + 1):setValue(stock)
    }

    const decrement = () => {
        value > 1?setValue(value - 1):setValue(1)
    }
  return (
    <>
    <div className='information'>
        <h4>{name}</h4>
        <p>{reviews} (based on Product reviews)</p>
        <p>MRP :<del>{price}</del></p>
        <p className='offer_para'>Deal of the Day : 16,000.00</p>
        <p>{description}</p>
        <div className='policy_section'>
            <div className='first_policy'>
            <i class="fa-solid fa-truck"></i>
            <p>Free & Fast Delivery</p>
            </div>
            <div className='first_policy'>
            <i class="fa-solid fa-right-left"></i>
            <p>30 Days Replacement</p>
            </div>
            <div className='first_policy'>
            <i class="fa-solid fa-truck"></i>
            <p>Order Delivered</p>
            </div>
            <div className='first_policy'>
            <i class="fa-solid fa-shield"></i>
            <p>3 years Warranty</p>
            </div>
        </div>
        <hr/>
        <p>Avaliable : {stock > 0?"In stock":"Not Avaliable"}[{stock}]</p>
        <p>ID : {id}</p>
        <p>Brand : {company}</p>
        <hr/>
        <div className='productcolor_section'>
            <p>Colors : </p>
            {
                mycolors.map((curcol,index) => {
                    return(
                        <>
                         <button type='button'className={colour===curcol?"product-color active_color":"product-color"}
                          onClick={() => {setColour(curcol)}} style={{backgroundColor:curcol,text:"none"}}>
                            {colour===curcol?<FaCheck style={{color:"white",textAlign:"center",fontSize:"10px"}}/>:curcol}
                            </button>
                        </>
                    )
                })
            }
        </div>
        <div className='quantity-section'>
            <button type='button' className='quantitybtn'onClick={decrement}>-</button>
            <p>{value}</p>
            <button type='button'className='quantitybtn'onClick={increment}>+</button>
        </div>
        <NavLink to="/cart" onClick={()=>addtocart(id,colour,value,mycontent)}> 
        <button type='button' className='addtocartbtn'>ADD TO CART</button>
        </NavLink>
    </div>
    </>
  )
}

export default ProductContent