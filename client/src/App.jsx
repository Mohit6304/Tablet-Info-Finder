import './App.css';
import {Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Tab from './pages/Tab';
import Contact from './pages/Contact';
import Reviews from './pages/Reviews';
import About from './pages/About';
import Footer from './components/Footer';
import Register from './pages/Register';
import Login from './pages/Login';
import FOG from 'vanta/src/vanta.fog';
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    FOG({
      el:'#vanta',
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      highlightColor: 0xeddab1,
      midtoneColor: 0xffffff,
      lowlightColor: 0x382e93,
      baseColor: 0xffffff,
      speed: 1.50
    })
  },[])
  return (
    <>
    <div className='bg' id='vanta'>
      <div className='in'>
      <Navbar />
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/tab" element={<Tab />} />
          <Route path="/contact" element={<Contact />}/>
          <Route path="/reviews" element={<Reviews/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
      </Routes>
      <Footer/>
      </div>
      </div>
    </>
  );
}

export default App;
