import { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [isUserLogged, setIsUserLogged] = useState(false);
    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider value={{isUserLogged, setIsUserLogged, user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;

export const useAuth = () => {
    const {isUserLogged, setIsUserLogged, user, setUser} = useContext(AuthContext);

    const login = (id, role) => {
        setIsUserLogged(true);
        setUser({id, role});

        Cookies.set('logged', 1, {expires: 1});
        Cookies.set('user', JSON.stringify({id, role}), {expires: 1});
    }

    const logout = () => {
        setIsUserLogged(false);
        setUser(null);

        Cookies.remove('logged');
        Cookies.remove('user');
    };

    return {login, logout, isUserLogged, user};
}