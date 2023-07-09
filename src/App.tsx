import React from 'react';
import './App.css'
import { Route , Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import AddProduct from './pages/AddProduct';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/add-product' element={<AddProduct/>}/>
    </Routes>
  );
}

export default App;
