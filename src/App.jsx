import React from 'react'
import Home from './pages/home'
import './App.css'
import Header from './components/header'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductListing from './components/ProductListing'

function App() {

  return (
    <>
     <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/productListing' element={<ProductListing/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
     </div>
    </>
  )
}

export default App
