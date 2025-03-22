import React, { useEffect } from 'react'
// import ProductContext from './context/ProductContext'
import { useProductContext } from './context/ProductContext'
import { useParams } from 'react-router-dom'
import Product from './components/Product'
import ProductContent from './components/ProductContent'
import './components/Single.css'
// import './components/SingleProduct.css'
// import { NavLink } from 'react-router-dom'
// import usePlaceholder from 'react-bootstrap/esm/usePlaceholder'


// const api

const api = "https://api.pujakaitem.com/api/products"

const SingleProduct = () => {
  // const [logo,setLogo] = useState(image[0])
const {id} = useParams()
console.log(id)
  const {getSingleProduct,isSingleLoading,singleProduct} = useProductContext();
  const {name,price,category,stock,stars,description,image,reviews,colors} = singleProduct ;
  
  // console.log(featureProducts[0].id)
  console.log(singleProduct)
  // singleProduct.image = [{url:" "}]
  

  useEffect(() => {
    getSingleProduct(`https://api.pujakaitem.com/api/products?id=${id}`)
  },[])

  if(isSingleLoading){
    return(
      <>
      <p>Products are loading......</p>
      
      </>
    )
  }
  return (
    <>
    {/* this is single product page */}
    <div className='singleproduct-content'> 
    <div className='productcontentimage_secion'> 
     <Product imgs={image} myname={name}/>
     </div>
     <div className='productcontent_section'>
      <ProductContent mycontent={singleProduct} mycolors={colors} />
     </div>
     </div>
     </>
  )
}

export default SingleProduct