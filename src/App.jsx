import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import { Accordion } from 'flowbite-react'
import Navbarcode from './components/navbar'
import Footer from './components/footer';
import Home from './pages/home';
import Horario from './pages/horario';
// import Material from './material';
import Login from './components/login';
import Signup from './components/signup';
import PersonalArea from './pages/personalarea';
import PersonalArea2 from './pages/personalarea2';
import Test from './pages/test'
import OficialInscricao from './pages/oficialinscricao'
import Material from './pages/Material'
import TamanhoCal from './pages/TamanhosComCalendario'
import TamanhoSurf from './pages/TamanhoSurf'

function App() {
  let user = null;
  if (localStorage.getItem("user")) {
    user = JSON.parse(localStorage.getItem("user"));
  }

  return (
    <>
      <Navbarcode user={user}></Navbarcode>
      {/* <Home></Home> */}
      {/* <Login></Login>
      <Signup></Signup> */}
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/horario' element={<Horario />} />
        <Route path='/test' element={<Test />} />
        <Route path='/material' element={<Material />} />
        <Route path='/personalarea' element={<PersonalArea />} />
        <Route path='/personalarea2' element={<PersonalArea2 />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/inscricao' element={<OficialInscricao />} />

        <Route path='/tamanhocal' element={<TamanhoCal />} />
        <Route path='/tamanhosurf' element={<TamanhoSurf />} />
      </Routes>
      {/* <Footer></Footer> */}
    </>
  )
}

export default App
