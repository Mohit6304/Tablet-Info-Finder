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
        /*const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
    if (token) {
      axios.get('/profile')
        .then(({ data }) => setUser(data))
        .catch(err => {
          console.log(err);
          setUser(null);
        });*/
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}