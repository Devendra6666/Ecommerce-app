import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Products from './Products'
import Contact from './Contact'
import SingleProduct from "./SingleProduct"
import Cart from "./Cart"
import Error from "./Error"
import Header from "./components/Header";
import Footer from "./components/Footer"

const App = () => {
  return <div>
   <Router>
    <Header/>
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/products" element={<Products/>}/>
         <Route path="/contact" element={<Contact/>}/>
         <Route path="/singleproduct/:id" element={<SingleProduct/>}/>
         <Route path="/cart" element={<Cart/>}/>
         <Route path="*" element={<Error/>}/>
      </Routes>
      <Footer />
   </Router>
  </div>;
};

export default App;
