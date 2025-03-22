// import styled from "styled-components";
import { useCartContext } from "./context/Cart_context";
import "./components/Cart.css"
import { Link } from "react-router-dom";
// import { useState } from "react";

const Cart = () => {
  let {cart,removeItem,plus,minus,clearCart} = useCartContext()
  // const [toggle,setToggle]= useState(0)
  // const [status,setStatus] = useState("false")
  // const {removeItem} = useCartContext()
  // const deleteItem = (id) =>{
  //   console.log(id)
  // }
  // console.log(cart)
   
  return(
    <>
       <div className="cart-container">
        <div className="item">
          <h6>Item</h6>
        </div>
        <div className="name">
          <h6>Name</h6>
        </div>
        <div className="price">
        <h6>Price</h6>
        </div>
        <div className="quantity">
        <h6>Quantity</h6>
        </div>
        <div className="sub">
        <h6>Subtotal</h6>
        </div>
        <div className="remove">
        <h6>Remove</h6>
        </div>
       </div>
       <hr className="bline"/>
       {/* this is about the products that show in the cart section */}
      
      {
        cart.map((ele,index) => {
          const {id,name} = ele
          return(
            <>
             <div className="cart-section">
        <div className="image-sec">
          <figure>
            <img src={ele.image}></img>
          </figure>
        </div>
        <div className="name-sec">
        <div className="image-info">
            <h6>{name}</h6>
            <div className="color-info" style={{backgroundColor:ele.colour}}></div>
          </div>
        </div>
        <div className="price-sec">
          <h6>{ele.price}</h6>
        </div>
        <div className="quantity-sec">
          <div className="show-btns">
            <button type="button" onClick={()=>plus(id)}>+</button>
            <h6>{ele.value}</h6>
            <button type="button" onClick={() => minus(id)}>-</button>
          </div>
        </div>
        <div className="subtotal-sec">
          <h6>{ele.price*ele.value}</h6>
        </div>
        <div className="delete-sec">
        <i class="fa-solid fa-trash" onClick={()=>removeItem(id)}></i>
        {/* <button type="button"> </button> */}
        </div>
       </div>
       <hr className="lline"/>
            </>
          )
        })
      }
      <div className="cart-after">
        <Link to={"/products"}><button type="button" className="clear">Continue Shopping</button></Link> 
        <button type="button" className="clear" onClick={clearCart}>Clear Cart</button>
      </div>
    </>
  );
};
export default Cart;
{/* <div className="cart-section">
<div className="image-sec">
  <figure>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKr7grwAXVbcaSO6lgegL_a5n-t2ksHh7zIecVWhzenA&s"></img>
  </figure>
</div>
<div className="name-sec">
<div className="image-info">
    <h6>Laptop</h6>
    <div className="color-info" style={{backgroundColor:"black"}}></div>
  </div>
</div>
<div className="price-sec">
  <h6>89000</h6>
</div>
<div className="quantity-sec">
  <div className="show-btns">
    <button type="button">+</button>
    <h6>0</h6>
    <button type="button">-</button>
  </div>
</div>
<div className="subtotal-sec">
  <h6>20000</h6>
</div>
<div className="delete-sec">
<button type="button"><i class="fa-solid fa-trash"></i></button>
</div>
</div> */}