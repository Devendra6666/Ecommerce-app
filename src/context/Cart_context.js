import { createContext,useContext,useReducer } from "react";
import reducer from "../Reducer/cartReducer"

const CartContext = createContext();

const initialState = {
    cart:[],
    total_item:"",
    toatal_amount:"",
    shipping_fee:5000
}
 

const CartProvider = ({children}) => {
    const [state,dispatch] = useReducer(reducer,initialState);

    const addtocart = (id,colour,value,mycontent) => {
        dispatch({type:"ADD_TO_CART",payload:{id,colour,value,mycontent}})
    }
    
    const removeItem = (id) => {
       dispatch({type:"REMOVE_ITEM",payload:id})
    }

    const plus = (id) => {
        dispatch({type:"INCREMENT",payload:id})
    }
    const minus = (id) =>{
        dispatch({type:"DECREMENT",payload:id})
    }
    const clearCart = () =>{
        dispatch({type:"CLEAR_CART",payload:""})
    }
    return <CartContext.Provider value={{...state,addtocart,removeItem,plus,minus,clearCart}}>{children}</CartContext.Provider>
}

const useCartContext = () => {
    return useContext(CartContext)
}

export {CartContext,CartProvider,useCartContext}