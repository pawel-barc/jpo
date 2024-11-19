import { useState } from "react";
import api from "../utils/api";
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
    const [inputs, setInputs] = useState({
        first_name: '',
        surname: '',
        email: '',
        password: '',
        repeat_password: ''
    });
    
    const [errorText, setErrorText] = useState('');

    const handleRegister = async () => {
        let areAllInputsCompleted = true;

        for (const prop in inputs) {
            if (!inputs[prop]) {
                areAllInputsCompleted = false;
            }
        }

        if (!areAllInputsCompleted) {
            setErrorText('All fields are required!');
            return;
        }

        if (inputs.password !== inputs.repeat_password) {
            setErrorText('Password and repeated password must be the same!');
            return;
        }

        setErrorText('');

        const response = await api('Register', 'standardRegister', inputs);
        
        if (response.error) {
            setErrorText(response.error);
            return;
        }

        console.log(response);
    }

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Register</h2>
            {errorText && <div className="alert alert-danger">{errorText}</div>}
            <div className="mb-3">
                <label className="form-label">Firstname</label>
                <input 
                    type="text" 
                    className="form-control" 
                    value={inputs.first_name} 
                    onChange={e => setInputs(prev => ({ ...prev, first_name: e.target.value }))} 
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Surname</label>
                <input 
                    type="text" 
                    className="form-control" 
                    value={inputs.surname} 
                    onChange={e => setInputs(prev => ({ ...prev, surname: e.target.value }))} 
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input 
                    type="email" 
                    className="form-control" 
                    value={inputs.email} 
                    onChange={e => setInputs(prev => ({ ...prev, email: e.target.value }))} 
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input 
                    type="password" 
                    className="form-control" 
                    value={inputs.password} 
                    onChange={e => setInputs(prev => ({ ...prev, password: e.target.value }))} 
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Repeat password</label>
                <input 
                    type="password" 
                    className="form-control" 
                    value={inputs.repeat_password} 
                    onChange={e => setInputs(prev => ({ ...prev, repeat_password: e.target.value }))} 
                />
            </div>

            <button className="btn btn-primary" onClick={handleRegister}>Register</button>
        </div>
    );
}

export default Register;
