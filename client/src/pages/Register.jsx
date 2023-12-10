// JSX with classNames
import { useState } from "react";
import axios from 'axios';
import {toast} from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';

import './register.css';


export default function Register() {
    const navigate=useNavigate();
    const[data,setData]=useState({
        name:'',
        email:'',
        password:'',
    })
    const registerUser = async (e)=>{
        e.preventDefault();
        const {name,email,password} =data;

        try {
          const data = await axios.post('/register', {
            name,
            email,
            password,
          });

          if (data.data.error) {
            toast.error(data.data.error);
          } else {
            setData({ name: '', email: '', password: '' });
            toast.success(data.data.message);
            navigate('/');
          }
        } catch (error) {
          console.log(error);
        }
    }
  return (
    <div className="register-container">
            <form className="register-form" onSubmit={registerUser}>
                <label className="register-label">Name</label>
                <input
                    className="register-input"
                    type='text'
                    placeholder="Enter name...."
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                />
                <label className="register-label">Email</label>
                <input
                    className="register-input"
                    type='email'
                    placeholder="Enter email..."
                    value={data.email}
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                />
                <label className="register-label">Password</label>
                <input
                    className="register-input"
                    type='password'
                    placeholder="Enter password.... "
                    value={data.password}
                    onChange={(e) => setData({ ...data, password: e.target.value })}
                />
                <button className="register-button" type="submit">Submit</button>
            </form>
        </div>
    );
}
