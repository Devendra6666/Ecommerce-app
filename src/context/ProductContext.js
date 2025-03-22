import { createContext, useContext , useEffect, useReducer } from "react";
import axios from 'axios';
// import { Reducer } from "react";
import reducer from '../Reducer/productReducer'

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products"
// const api = "https://api.pujakaitem.com/api/products?id=thapaserialnoa"
const initalState = {
    isLoading : false,
    isError : false,
    products : [],
    featureProducts : [],
    isSingleLoading : false,
    singleProduct : {}
}

const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initalState)

    const getProducts = async(url) => {
        dispatch({type : "SET_LOADING"})
        try {
            const res = await axios.get(url)
            // const data = await res.json()
            const products = await res.data;
            // console.log(products)
            dispatch({type:"SET_API_DATA", payload:products})
        } catch (error) {
            dispatch({type : "API_ERROR"})
            // console.log(error)
        }
    }

    const getSingleProduct = async(url) =>{
        dispatch({type:"SET_SINGLE_LOADING"})
        try {
         const res = await axios.get(url)
         const singleproduct = await res.data;
         // console.log(singleproduct)
         dispatch({type:"SET_SINGLE_DATA",payload:singleproduct})
         
        } catch (error) {
         dispatch({type:"SINGLE_API_DATA_ERROR"})
         // console.log(error)
        }
     }

    useEffect(() => {
        getProducts(API)
        // getSingleProduct(api)
    },[])

    

    return(
        <>
         <AppContext.Provider value={{...state,getSingleProduct}}>
            {children}
        </AppContext.Provider>
        </>
    )
    
}

const useProductContext = () => {
    return useContext(AppContext)
}
export {AppProvider,AppContext,useProductContext}