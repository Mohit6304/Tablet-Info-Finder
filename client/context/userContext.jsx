import axios from 'axios';
import { createContext , useState , useEffect} from 'react';

export const UserContext = createContext({});

// eslint-disable-next-line react/prop-types
export function UserContextProvider({children}) {
    const [user, setUser] = useState(null);
    useEffect(() => {
        if (!user) {
            axios.get('/profile')
                .then(({ data }) => setUser(data))
                
        }
    }, []);

    const logout = async () => {
            await axios.post('/logout');
            setUser(null);
    }
    return (
        <UserContext.Provider value={{user, setUser ,logout}}>
            {children}
        </UserContext.Provider>
    )
}