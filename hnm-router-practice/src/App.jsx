import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router";
import ProductAll from './page/ProductAll.jsx';
import Login from './page/Login.jsx';
import ProductDetail from './page/ProductDetail.jsx';
import Navbar from './component/Navbar.jsx';

//1.전체상품페이지, 로그인, 상품상세페이지
//1.1 nav 바 : 항상 그대로
//2. 전체 상품페이지 : 전체상품 볼 수 있다.
//3. 로그인 버튼을 누르면 : 로그인 페이지 나온다.
//3. 상품디테일을 눌렀으나, 로그인이 안되어있을 경우->로그인 페이지가 먼저 나온다.
//4. 로그인 되어있을 경우 상품 디테일 페이지를 볼 수 있다.
//5. 로그아웃 버튼을 누르면 : 로그아웃이 된다.
//5. 로그아웃이 되면 : 상품디테일 페이지 볼 수 X, 다시 로그인 페이지로 이동
//6. 로그인을 하면 로그아웃이 보이고, 로그아웃을 하면 로그인이 보인다.
//7. 상품을 검색할 수 있다.

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ProductAll />} /> 
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />} /> 
      </Routes>
      <Routes>
        <Route path="/product/:id" element={<ProductDetail />} /> 
      </Routes>
    </div>
  )
}

export default App
