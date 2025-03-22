import React  from 'react'
import { useFilterContext } from './context/FilterContext'
import DisplayProducts from './components/DisplayProducts';
 
const Products = () => {
  const {filter_products} = useFilterContext();
  // console.log(filter_products)
  
  // console.log(filter_products[6].name)

  return (
     <>
     
     <DisplayProducts products={filter_products}/>
     </>
  )
}

export default Products