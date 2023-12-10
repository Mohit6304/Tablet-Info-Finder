// import {useContext} from 'react'
// import { UserContext } from '../../context/userContext';
import './home.css'
import { NavLink } from 'react-router-dom';
import Lottie from 'lottie-react';
import animation from '../assets/pill.json';

export default function Home() {
    // const {user}=useContext(UserContext);
    return (
        <div>
            {/* {!!user && (<h2>hi {user.name} !!</h2>)} */}
            <div className="hero-section">
            <div className="hero-content">
                <h1>Discover Your Perfect Tablet</h1>
                <p>Explore a wide range of tablets and find the one that suits your needs.</p>
                <p><NavLink to="/tab"><button>Browse</button></NavLink></p>
            </div>
            <div className="hero-image">
                <Lottie animationData={animation}/>
            </div>
            </div>

        </div>
    )
}
