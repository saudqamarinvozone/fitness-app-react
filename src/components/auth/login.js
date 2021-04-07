import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

const Login = (props) => {
    
    const initialState = {
        email: "",
        password: "",
    };

    const [{ email, password }, setState] = useState(initialState);
    const [errorMessage, setError] = useState("");
    
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        
        setState(
            prevState => ({ ...prevState, [name]: value })
        )
        
    }
    
    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const {data} = await axios.post('http://localhost:5000/login', {
                email,
                password,
            });
            console.log(data.authToken);
            // localStorage.setItem('accessToken', data.authToken);
            props.dispatch({
                type: "LOG_IN",
                payload: {
                    authToken: data.authToken,
                    user: data.user
                }
            });
            setError(() => (""));
            window.location = '/dashboard';
        } catch (err) {
            if (err.response && err.response.status === 400) {
                const { message } = err.response.data;
                setError(
                    () => ( message )
                )
                
			}
        }
        
    };
    
    return (
 
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">

                <div>
                    <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow"/>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Sign in to your account
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Or <Link to="/register" className="font-medium text-green-500 hover:text-green-400">
                            Create a new account
                        </Link>
                    </p>
                    
                </div>

                {errorMessage.length > 0 &&
                    <p className="mb-4 text-center text-red-600 font-mono text-sm"> {errorMessage}</p>
                }

                <form className="mt-8 space-y-6" onSubmit={ handleSubmit }>
            
                    <div className="rounded-md shadow-sm -space-y-px">
                        
                        <div>
                                     
                            <input id="email-address" name="email" type="email" required                    
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border 
                                border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none
                                focus:ring-green-300 focus:border-green-300 focus:z-10 sm:text-sm"
                                placeholder="Email"
                                onChange={handleInputChange}
                                value={email} />
                        </div>
                
                        <div>
                
                            <input id="password" name="password" type="password" required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border
                                border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none
                                focus:ring-green-300 focus:border-green-300 focus:z-10 sm:text-sm"
                                onChange={handleInputChange}
                                value={password}
                                placeholder="Password" />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                
                        <div className="flex items-center">            
                            <input id="remember_me" name="remember_me" type="checkbox"            
                                className="h-4 w-4 text-green-300 focus:ring-green-300 border-gray-300 rounded" />
                
                            <label htmlFor="remember_me" className="ml-2 block text-sm text-green-500">
                                Remember me
                            </label>
                        </div>

                        <div className="text-sm">
                            <Link to="/forget-password" className="font-medium text-green-500 hover:text-green-400">
                                Forgot your password? 
                            </Link>
                        </div>
                    
                    </div>

                    <div>
                        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border
                        border-transparent text-sm font-medium rounded-md text-white bg-coral-green
                        hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-offset-2
                        focus:ring-green-300">
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                
                                <svg className="h-5 w-5 text-green-200 group-hover:text-green-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                            </span>
                            Sign in
                        </button>
                    </div>

                </form>

            </div>
        </div>
    );
};

const mapStateToProps = state => ({
   state
});

export default connect(
  mapStateToProps,
)(Login);
