import React from 'react'
import Navbar from './components/HomeComponents/Navbar'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Acadamic from './pages/Acadamic';
import Examination from './pages/Examination';
import Hostel from './pages/Hostel';
import Liberary from './pages/Liberary';
import Profile from './pages/Profile';
import Login from './pages/Login';




function App() {
  return (

    <BrowserRouter>

    <Navbar />
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/login" element={<Login />} />
    
    <Route path="/home" element={<Home/>} />
      <Route path="/examination" element={<Examination/>} />
      <Route path="/library" element={<Liberary />} />
      <Route path="/hostel" element={<Hostel/>} />
      <Route path="/academic" element={<Acadamic/>} />
      <Route path="/profile" element={<Profile />} />
      
    </Routes>
    
    
    </BrowserRouter>

  )
}

export default App