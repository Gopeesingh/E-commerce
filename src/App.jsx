import React from 'react'
import Home from './pages/home'
import './App.css'
import Header from './components/header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
     <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
     </div>
    </>
  )
}

export default App
