import { createContext, useContext, useEffect, useReducer} from "react";
import { useProductContext } from "./ProductContext";
import  reducer from "../Reducer/filterReducer";


const FilterContext = createContext()
const initalState = {
    filter_products : [],
    companyProducts : [],
    all_products : [],
    sortingValue : "lowest",
    filters : {
        text : "",
        category : "",
        company : ""
    }
}

const FilterProvider = ({children}) => {
    const {products} = useProductContext();
    console.log(products)
    // const [input,setInput] = useState()
    const [state,dispatch] = useReducer(reducer,initalState)
    

    useEffect(() => {
        dispatch({type:"LOAD_FILTER_PRODUCTS",payload:products})
        // dispatch({type:"LOAD_COMPANY_PRODUCTS",payload:products})
    },[products])
    useEffect(() => {
        dispatch({type:"LOAD_COM_PRODUCTS",payload:products})
        // dispatch({type:"LOAD_COMPANY_PRODUCTS",payload:products})
    },[products])
    
  useEffect(() => {
    dispatch({type:"SORT_FILTERPRODUCTS",payload:products})
  },[state.sortingValue])
  
  useEffect(() => {
    // console.log("hi")
    dispatch({type:"FILTER_CATEGORY_PRODUCTS"})
    dispatch({type:"FILTER_SEARCH_PRODUCTS"})
    dispatch({type:"COMPANY_SERACH_PRODUCTS"})
  },[state.filters])
  
    const changeoption = () => {
        dispatch({type:"SORT_VALUE"})
        // let uservalue = document.getElementById("sort").value;
        // console.log(uservalue)
        // let selectedValue = document.getElementById("sort");
        //     let tempSelectedValue = selectedValue.options[selectedValue.selectedIndex].value;
        //     console.log(tempSelectedValue)
    }

    // const changeCompany = (e) => {
    //     const companyname=e.target.name;
    //     const companyvalue = e.target.value
    //     // console.log(name,value)
    //     dispatch({type:"UPDATE_COMPANY_PRODUCTS",payload:{companyname,companyvalue}})
    // }

    const updatafilterProuducts = (event) => {
        const name = event.target.name;
        const value = event.target.value
        console.log(name,value)

        dispatch({type:"UPDATE_FILTERS_VALUE",payload:{name,value}})
    }

    
    return(
        <>
         <FilterContext.Provider value={{...state,changeoption,updatafilterProuducts}}>
             {children}
        </FilterContext.Provider>
        </>
    )

}

const useFilterContext = () => {
    return useContext(FilterContext)
}

export {FilterContext,useFilterContext,FilterProvider}