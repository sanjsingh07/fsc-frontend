import React from 'react';
import CreateProduct from './createProduct/createProduct';
import GetProductDetails from './getProductDetails/getProductDetails'
import { Routes, Route } from 'react-router-dom';

// import CreateProductt from './createProduct/createProductt'


function App() {
  return (
    <div className="App">
     
     <Routes>
        <Route path="/GetProductDetails" element={<GetProductDetails />} />
        <Route path="/" element={<CreateProduct/>} />
      </Routes>
     {/* <GetProductDetails/> */}
   
      {/* <CreateProductt/> */}
  
    </div>
  );
}

export default App