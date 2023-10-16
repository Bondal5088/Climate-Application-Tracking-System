import './App.css';
import Login from './Components/catsapp/Login';
import Signup from './Components/catsapp/Signup';
import CatsApp from './Components/catsapp/CatsApp';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/catsapp' element={<CatsApp />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
