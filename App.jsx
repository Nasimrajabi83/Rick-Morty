import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import User from './Component/User'
import Home from './Component/Home'
import Product from './Component/Product'
import './App.css'
import Layout from './Component/Layout'
import LayoutProvider from './Context/context'
import Register from './Component/Register'
import Login from './Component/Login'

function App() {
  return (
  
    <div>
      {/* <Header/> */}
      <LayoutProvider>
      <Routes>
      <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path=':id' element={<Product/>}/>
          <Route path='/user' element={<User/>}/>
        </Route>
      </Routes>
      </LayoutProvider>
    </div>
  )
}

export default App