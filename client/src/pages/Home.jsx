import {useContext} from 'react'
import { UserContext } from '../../context/userContext';

export default function Home() {
    const {user}=useContext(UserContext);
    return (
        <div>
            {!!user && (<h2>hi {user.name} !!</h2>)}
        </div>
    )
}
