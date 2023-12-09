// JSX with classNames
import { useState } from "react";
import './Login.css';

export default function Login() {
  const [data, setData] = useState({
    email: '',
    pswd: '',
  });

  const loginUser = (e) => {
    e.preventDefault();
  };

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
          value={data.pswd}
          onChange={(e) => setData({ ...data, pswd: e.target.value })}
        />
        <button className="login-button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}