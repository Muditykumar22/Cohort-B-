import React, {useState} from 'react';
import {useAuth} from '../context/AuthContext';
const Login = ()=> {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });
    const {login} = useAuth();
    const handleSubmit = (e) => {
     e.preventDefault();
     if(formData.name && formData.email){
        login(formData);
     }
    };
    const handleChange = (e)=> {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    return(
        <div className="login-container">
            <div className= "login-card">
                <h2> Welcome to tech concept Demo</h2>
                <p> please login to continue</p>
                <form onSubmit={handleSubmit} className='login-form'>
                    <div className='form-group'>
                        <label htmlFor = "name"> Name:</label>
                        <input
                        type ="text"
                        id= "name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="enter your name"
                        />
                    </div>
                    <div className ="form-group">
                        <label htmlFor='email'>Email:</label>
                        <input
                        type ="text"
                        id= "email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="enter your email"
                        />
                    </div>
                    <button type="submit" className = "login-btn">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};
export default Login;