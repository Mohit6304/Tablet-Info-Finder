// JSX with classNames
import { useState } from "react";
import './register.css';

export default function Register() {
    const [data, setData] = useState({
        name: '',
        email: '',
        pswd: '',
    });

    const registerUser = (e) => {
        e.preventDefault();
    };

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
                    value={data.pswd}
                    onChange={(e) => setData({ ...data, pswd: e.target.value })}
                />
                <button className="register-button" type="submit">Submit</button>
            </form>
        </div>
    );
}