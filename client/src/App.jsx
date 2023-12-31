import './App.css';
import {Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Tab from './pages/Tab';
import TabDetails from './pages/TabDetails';
import Contact from './pages/Contact';
import Reviews from './pages/Reviews';
import About from './pages/About';
import Footer from './components/Footer';
import Register from './pages/Register';
import Login from './pages/Login';
import axios from 'axios';
import {Toaster} from 'react-hot-toast';
import { UserContextProvider } from '../context/userContext';
import FOG from 'vanta/src/vanta.fog';
import { useEffect } from 'react';

axios.defaults.baseURL='http://localhost:8000'; 
axios.defaults.withCredentials=true;


function App() {
  useEffect(()=>{
    const vantaEffect = FOG({
      
      el:'#vanta',
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200,
      minWidth: 200,
      highlightColor: 0xeddab1,
      midtoneColor: 0xffffff,
      lowlightColor: 0x382e93,
      baseColor: 0xffffff,
      speed: 1.50,

    });
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  },[])
  return (
    <UserContextProvider>
      <div className='bg' id='vanta'>
        <div className='in'>
          <Navbar />
          <Toaster position="top-right" toastoptions={{duration : 2000}}  reverseOrder={false}/>
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/tab" element={<Tab />} />
              <Route path="/contact" element={<Contact />}/>
              <Route path="/reviews" element={<Reviews/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/tablet/:id" element={<TabDetails/>}/>
          </Routes>
          <Footer/>
        </div>
      </div>
    </UserContextProvider>
  );
}

export default App;
