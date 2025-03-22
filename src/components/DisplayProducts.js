import React, { useState } from 'react'
import GridView from './GridView'
import ListView from './ListView'
import './Display.css'
// import { FilterContext } from '../context/FilterContext'
import { useFilterContext } from '../context/FilterContext'


const DisplayProducts = ({ products }) => {
  const { changeoption, filter_products, updatafilterProuducts, text} = useFilterContext();
  // console.log(filter_products)
  //    const [view, setView] = useState("grid")
  // console.log(products.length)
  const [view, setView] = useState("grid")

  //     // console.log(products)
  const displaygrid = () => {
    setView("grid")
  }
  const displaylist = () => {
    setView("list")
  }

  // const setdata = (e) => {
  //    console.log(e.target.value)
  //    setInput(e.target.value)
  //    console.log(input)
  // }
  const updateCategory_products = (data, property) => {
    let newData = filter_products.map((curele, index) => {
      return curele[property];
    })
    return newData = ["All", ...new Set(newData)]
    // console.log(newData)
  }

  const category_products = updateCategory_products(filter_products, "category")
  const company_products = updateCategory_products(filter_products, "company")
  // console.log(company_products)

  return (
    <>
      <div className='filtersection-box'>
        <form className='searchform'>
          <input type='text' name='text' value={text} onChange={updatafilterProuducts} placeholder='search'></input>
        </form>
        <div className='filterbuttons_section'>
          <button type='button' className="gridfilterbtn shadow" onClick={displaygrid}><i class="fa-solid displayicons fa-grip"></i></button>
          <button type='button' className="gridfilterbtn shadow" onClick={displaylist}><i class="fa-solid displayicons fa-list"></i></button>
          {/* <GridView gridproducts={products}/> */}

        </div>
        <div className='lengthofproducts'>
          <p>Total No of Products : {products.length}</p>
        </div>
        <div className='selectoption-list'>
          <select name="prices" id="sort" onClick={changeoption}>
            <option value="lowest">price(Lowest)</option>
            <option value="highest">price(Highest)</option>
            <option value="a-z">price(A-Z)</option>
            <option value="z-a">price(Z-A)</option>
          </select>
        </div>
      </div>
      <div className='companycontent'>
        <div className='companydetails'>
          <h6>Category</h6>
          <div className='buttonsSection'>
            <button type='button' name='category' value="All" onClick={updatafilterProuducts}
            >All</button>
            <button type='button' name='category' value="mobile" onClick={updatafilterProuducts}
            >Mobile </button>
            <button type='button' name='category' value="laptop" onClick={updatafilterProuducts}
            >Laptop </button>
            <button type='button' name='category' value="computer" onClick={updatafilterProuducts}
            >Computer </button>
            <button type='button' name='category' value="accessories" onClick={updatafilterProuducts}
            >Accessories </button>
            <button type='button' name='category' value="watch" onClick={updatafilterProuducts}
            >Watch </button>
          </div>
          <div className='companySection'>
            <h6>Company</h6>
            <select name="company" id="company" onClick={updatafilterProuducts}>
              
                <option name="company" value="All">All</option>
                <option name="company" value="apple">Apple</option>
                <option name="company" value="samsung">Samsung</option>
                <option name="company" value="dell">Dell</option>
                <option name="company" value="nokia">Nokia</option>
                <option name="company" value="asus">Asus</option>
                <option name="company" value="lenova">Lenova</option>
                <option name="company" value="rolex">Rolex</option>
                 
            </select>
          </div>
        </div>
        <div className='viewproducts_section'>
          {view === "grid" ? <GridView gridproducts={products} /> : <ListView listproducts={products} />}
        </div>
      </div>
    </>
  )
}

export default DisplayProducts

// {view==="grid"?<GridView gridproducts={products}/>:<ListView listproducts={products}/>}