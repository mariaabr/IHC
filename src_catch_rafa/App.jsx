import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import { Accordion } from 'flowbite-react'
import Navbarcode from './components/navbar'
import Footer from './components/footer';
import Home from './pages/home';
// import Horario from './horario';
// import Material from './material';
import Login from './components/login';
import Signup from './components/signup';

function App() {
  return (
    <>
      <Navbarcode></Navbarcode>
      {/* <Home></Home> */}
      {/* <Login></Login>
      <Signup></Signup> */}
      <Routes>
        <Route path='/home' element={<Home />} />
        {/* <Route path='/horario' element={<Horario />} />
        <Route path='/material' element={<Material />} /> */}
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      {/* <Footer></Footer> */}
    </>
  )
}

export default App
