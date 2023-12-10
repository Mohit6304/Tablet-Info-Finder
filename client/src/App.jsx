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
import axios from 'axios'
import {Toaster} from 'react-hot-toast';

axios.defaults.baseURL='http://localhost:8000'; 
axios.defaults.withCredentials=true;

function App() {
  return (
    <>
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
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
