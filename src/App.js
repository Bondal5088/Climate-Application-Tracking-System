import './App.css';
import React from 'react'
import Login from './Components/catsapp/Login';
import Signup from './Components/catsapp/Signup';
import CatsApp from './Components/catsapp/CatsApp';
import Charts from './Components/catsapp/Chart';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/catsapp' element={<CatsApp />}></Route>
      <Route path='/charts' element={<Charts />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
