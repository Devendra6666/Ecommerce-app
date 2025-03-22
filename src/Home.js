import React, { useContext } from 'react'
import Herosection from './components/Herosection'
import Services from './components/Services'
import Trusted from './components/Trusted'
// import { AppContext } from './context/ProductContext'
// import { AppProvider } from './context/ProductContext'
import { useProductContext } from './context/ProductContext'
import FeatruedProducts from './components/FeatruedProducts'
// import { useFilterContext } from './context/FilterContext'


const Home = () => {
  // const {filter_products} = useFilterContext();
  // console.log(filter_products)
  const {name} =  useProductContext();
  const myName = {
    value : "Ecommerce Website/Store"
  }
  return (
    <>
    {name}
    <Herosection myData = {myName}/>
    <FeatruedProducts />
    <Services/>
    <Trusted/>
    </>
  )
}

export default Home
// https://api.pujakaitem.com/api/products