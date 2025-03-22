//  import React from 'react'
 
 const cartReducer = (state,action) => {
   
       if(action.type === "ADD_TO_CART"){
         let {id,colour,value,mycontent} = action.payload;
         console.log(mycontent,colour,value)
        
        let cartProduct;

        cartProduct = {
            id : id + colour,
            name : mycontent.name,
            colour : colour,
            price:mycontent.price,
            value : value,
            image : mycontent.image[0].url,
            max : mycontent.stock
        }
        return {
            ...state,
            cart : [...state.cart,cartProduct]
        }
       }
       if(action.type==="INCREMENT"){
        let updatedProduct = state.cart.map((curEle) =>{
            if(curEle.id===action.payload){
            
                let incAmount = curEle.value + 1
                 
                if(incAmount>=curEle.max){
                    incAmount = curEle.max
                }
                return{
                    ...curEle,
                    value : incAmount
                }
            }else{
                return curEle
            }
        })
        return{...state,cart:updatedProduct}
       }

       if(action.type==="DECREMENT"){
        let updatedProduct = state.cart.map((curEle) =>{
            if(curEle.id===action.payload){
            
                let decAmount = curEle.value - 1
                 
                if(decAmount<=1){
                    decAmount = 1
                }
                return{
                    ...curEle,
                    value : decAmount
                }
            }else{
                return curEle
            }
        })
        return{...state,cart:updatedProduct}
       }

       if(action.type==="REMOVE_ITEM"){
        let updatedCart = state.cart.filter((curItem) => curItem.id!==action.payload)
          return{
            ...state,
            cart:updatedCart
          }
       }
       if(action.type==="CLEAR_CART"){
        return{
            ...state,
            cart:[]
        }
       }
       return state;
 }
 
 export default cartReducer