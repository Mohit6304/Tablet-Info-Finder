// JSX with classNames
import { useState } from "react";
import axios from 'axios'
import { toast } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import './Login.css';

export default function Login() {
  const navigate=useNavigate();
  const[data,setData]=useState({
    email:'',
    password:'',
})
  const loginUser= async (e)=>{

    e.preventDefault();

    const {email,password}=data;

    try {
      const { data } = await axios.post('/login', { email, password});
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({ email: '', password: '' });
        toast.success(data.message);
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }

  }
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={loginUser}>
        <label className="login-label">Email</label>
        <input
          className="login-input"
          type="email"
          placeholder="Enter email..."
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <label className="login-label">Password</label>
        <input
          className="login-input"
          type="password"
          placeholder="Enter password.... "
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <button className="login-button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}