import React, { useState } from 'react'
import './ListView.css';
import { NavLink } from 'react-router-dom';

const ListView = ({ listproducts }) => {
    const [show,setShow] = useState("hide")
    console.log(listproducts)

    const change = () => {
        setShow("display")
    }

    const reversechange = () => {
        setShow("hide")
    }
    return (
        <>
            <div className='listcontainer'>
                {
                    listproducts.map((curele,index) => {
                        return(
                            <>
                             <div className='listview-box'>
                    <div className='listsingle-box'>
                        <NavLink to={`/singleProduct/${curele.id}`}> 
                        <figure>
                            <img className='listsingleimage' src={curele.image}></img>
                        </figure>
                        </NavLink>
                    </div>
                    <div className='listsingleimage-content'>
                        <h6>{curele.name}</h6>
                        <p>{curele.price}</p>
                        <p>{curele.description}</p>
                        {show==="display"?<div className='hidecontent'>
                            <p>{curele.category}</p>
                        </div>:null}
                        {show==="hide"?<button type='button'onClick={change} className='listsinglebutton'><i class="fa-solid fa-arrow-down-long"></i></button>:null}                        
                        {show==="display"?<button type='button'onClick={reversechange} className='listsinglebutton'><i class="fa-solid fa-arrow-up"></i></button>:null}                        

                       
                    </div>
                    
                </div>
                <hr className='listhr'/>
                            </>
                        )
                    })
                }
                
            </div>
        </>
    )
}

export default ListView

{/* <div className='listsingle-box'> 
<figure> 
<img className='listsingleimage' src={curimg.image}></img>
</figure>
</div>
<div className='listsingleimage-content'>
    <h6>Rolex Watch</h6>
    <p>20,000.00</p>
    <p>The Rolex Watch is compact with 6.2D inches and the Price of this watch is almost equal to the 30 percent of the normal rends of the society.</p>
     <div className='hidecontent'> 
    <p>Gadgets/Accessories</p>
    </div>
    <button type='button'>Read More</button>
</div> */}