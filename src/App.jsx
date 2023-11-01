import React from 'react'
import Navbar from './component/Navbar/Navbar.jsx'
import Resturant from './component/Resturant/Resturant'
import Product from './component/Product/Product.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'


export default function App() {
  return (
    <>
    <BrowserRouter>
     <Navbar />
     <Routes>
     <Route path='/Resturant' element={< Resturant/>} />
     <Route path='/Product' element={< Product/>} />
    
     </Routes>
     </BrowserRouter>
    </>
  )
}
