import { useState } from "react";

export default function Login() {
  const[data,setData]=useState({
    email:'',
    pswd:'',
})
  const loginUser=(e)=>{
    e.preventDefault();
  }
  return (
    <div>
      <form onSubmit={loginUser}>
        <label>Email</label>
        <input type='email' placeholder="enter email..." value={data.email} onChange={(e)=>setData({...data, email:e.target.value})}/>
        <label>Password</label>
        <input type='password' placeholder="enter password.... " value={data.pswd} onChange={(e)=>setData({...data, pswd:e.target.value})}/>
        <button type="submit">Login</button>
    </form>
    </div>
  )
}
