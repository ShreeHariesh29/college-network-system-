import React from 'react'
import Navbar from './components/HomeComponents/Navbar'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Acadamic from './pages/Acadamic';
import Examination from './pages/Examination';
import Hostel from './pages/Hostel';
import Liberary from './pages/Results';
import Profile from './pages/Profile';
import Login from './pages/Login';
import MidOneTable from './components/Examination components/MidOneTable';
import MidTwoTable from './components/Examination components/MidTwoTable';
import ModelTable from './components/Examination components/ModelTable';
import SemTable from './components/Examination components/SemTable';
import MidOneResult from './components/Result Components/MidOneResult';
import MidTwoResults from './components/Result Components/MidTwoResults';
import ModelResult from './components/Result Components/ModelResult';
import SemResult from './components/Result Components/SemResult';




function App() {
  return (

    <BrowserRouter>

    <Navbar />
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/login" element={<Login />} />
    
    <Route path="/home" element={<Home/>} />
    <Route path="/examination" element={<Examination/>}>
      <Route path="/examination/midonetable" element={<MidOneTable />} />
      <Route path="/examination/midtwotable" element={<MidTwoTable />} />
      <Route path="/examination/modeltable" element={<ModelTable />} />
      <Route path="/examination/semtable" element={<SemTable />} />
    </Route>
      <Route path="/library" element={<Liberary />} />
      <Route path="/hostel" element={<Hostel/>} />
      <Route path="/academic" element={<Acadamic/>} />
      <Route path="/profile" element={<Profile />} />
      
    </Routes>
    
    
    </BrowserRouter>

  )
}

export default App