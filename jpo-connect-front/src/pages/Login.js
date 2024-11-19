import { useGoogleLogin } from '@react-oauth/google';
import FacebookLogin from 'react-facebook-login';
import api from '../utils/api';
import { useAuth } from '../contexts/AuthContext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    const {login, isUserLogged} = useAuth();
    const navigate = useNavigate();

    if(isUserLogged){
        navigate('/');
    }

    const [credentials, setCredentilas] = useState({
        email: '',
        password: ''
    });

    console.log(credentials);

    const handleGoogleLoginSuccess = async (authResponse) => {
        const googleRequest = await fetch(`https://www.googleapis.com/oauth2/v2/userinfo?access_token=${authResponse.access_token}`, {
            headers: {
                Authorization: `Bearer ${authResponse.access_token}`,
                Accept: 'application/json'
            }
        });

        const googleResponse = await googleRequest.text();
        const apiResponse = await api('Register', 'registerUsingGoogle', googleResponse);
        login(apiResponse.id, apiResponse.role);
        navigate('/');
    };

    const handleGoogleLoginError = (error) => {
        console.log(error);
    };

    const googleLogin = useGoogleLogin({
        onSuccess: handleGoogleLoginSuccess,
        onError: handleGoogleLoginError
    });

    const handleFBLogin = async (fbResponse) => {
        const apiResponse = await api('Register', 'registerUsingFacebook', {
            id: fbResponse.userID,
            email: fbResponse.email,
            first_name: fbResponse.name.split(' ')[0],
            surname: fbResponse.name.split(' ').slice(1).join(' ')
        });

        login(apiResponse.id, apiResponse.role);
        navigate('/');
    };

    const handleLoginFormSubmit = async (e) => {
        e.preventDefault();

        const apiResponse = await api('Login', 'standardLogin', credentials);
        console.log(apiResponse);
        if(apiResponse.error){
            alert(apiResponse.error);
        }
        else{
            login(apiResponse.id, apiResponse.role);
            navigate('/');
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Login</h2>
            <div className="mb-3">
                <button className="btn btn-danger me-2" onClick={() => googleLogin()}>Login using Google</button>
                <FacebookLogin 
                    buttonStyle={{padding:"6px"}}  
                    appId="782218034089071"
                    autoLoad={false}  
                    fields="name,email,picture"  
                    callback={handleFBLogin}
                    cssClass="btn btn-primary"
                    icon="fa-facebook"
                />
            </div>

            <form onSubmit={handleLoginFormSubmit}>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        value={credentials.email} 
                        onChange={e => setCredentilas(prev => ({...prev, email: e.target.value}))} 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        value={credentials.password} 
                        onChange={e => setCredentilas(prev => ({...prev, password: e.target.value}))}
                    />
                </div>
                <button className="btn btn-success">Login</button>
            </form>
        </div>
    );
};

export default Login;
