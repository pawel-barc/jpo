import Router from '../router/Router'
import UnloggedHeader from "./UnloggedHeader";
import { useAuth } from '../contexts/AuthContext';
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import LoggedHeader from './LoggedHeader';

const MainApp = () => {
    const {isUserLogged, login} = useAuth();

    useEffect(() => {
        if(Cookies.get('logged')){
            const user = JSON.parse(Cookies.get('user'));
            login(user.id, user.role);
        }
    }, [])

    return (
        <div>
            {isUserLogged ? <LoggedHeader /> : <UnloggedHeader />}
            <Router />
        </div>
    )
}

export default MainApp;