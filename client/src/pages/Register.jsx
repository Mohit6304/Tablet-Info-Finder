import { useState } from "react";

export default function Register() {
    const[data,setData]=useState({
        name:'',
        email:'',
        pswd:'',
    })
    const registerUser=(e)=>{
        e.preventDefault();
    }
  return (
    <div>
    <form onSubmit={registerUser}>
        <label>Name</label>
        <input type='text' placeholder="enter name...." value={data.name} onChange={(e)=>setData({...data, name:e.target.value})}/>
        <label>Email</label>
        <input type='email' placeholder="enter email..." value={data.email} onChange={(e)=>setData({...data, email:e.target.value})}/>
        <label>Password</label>
        <input type='password' placeholder="enter password.... " value={data.pswd} onChange={(e)=>setData({...data, pswd:e.target.value})}/>
        <button type="submit">Submit</button>
    </form>
    </div>
  )
}
