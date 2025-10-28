import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./page/Homepage.jsx"
import AboutPage from "./page/AboutPage.jsx"
import ProductPage from './page/ProductPage.jsx';
import ProductDetailPage from './page/ProductDetailPage.jsx';
import LoginPage from "./page/LoginPage.jsx";
import UserPage from "./page/UserPage.jsx";



function App() {
   
    const[authenticate,setAuthenticate] = useState(false) //false:로긴안함
    const PrivateRoute = () => {
      return authenticate == true? <UserPage />:<Navigate to="/login" />
   }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user" element={<PrivateRoute />} />        
      </Routes>      
    </div>
  )
}

export default App
