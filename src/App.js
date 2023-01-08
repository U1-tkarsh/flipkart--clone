import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from './component/Product';
import Signup from './component/Signup';
import Login from './component/Login';
import Home from './component/Home';
import Navbar from './component/Navbar';
import CompB from './component/CompB';
import CompC from './component/CompC';
import Products from './component/Products';
import React, { useState } from 'react';

function App() {

  const[counter, setCounter]  = React.useState(0);

  return (
    <div>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/product" element={<Product />}/>
      <Route path="/contact" element={<Signup />}/>
      <Route path="*" element={<Login />}/>
      <Route path="/Products/:id" element={<Products />}/>
    </Routes>
    </BrowserRouter>
    {/* App : {counter}
    <CompB counter={counter} setCounter= {setCounter}/>
    <CompC  counter={counter}/> */}
    </div>
  );
}

export default App;