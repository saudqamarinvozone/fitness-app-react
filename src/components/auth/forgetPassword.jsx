import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ForgetPassword = (props) => {
    
    const initialState = {
        email: "",
    };

    const [{ email }, setState] = useState(initialState);
    const [errorMessage, setError] = useState("");
    
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        
        setState(
            prevState => ({ ...prevState, [name]: value })
        )
        
    }
    const clearState = () => {
        
        setState(initialState);
    }
    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const {data} = await axios.post('http://localhost:5000/forget-password', {
                email,
            });
        
            clearState();
            
            props.history.push({
                pathname: '/reset-password',
                state: { email: data.email }
            })
        
        } catch (err) {
            if (err.response && err.response.status === 404) {
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
                        Forgot your password
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        please enter registered email Or <Link to="/signin" className="font-medium text-green-500 hover:text-green-400">
                            Sign-in 
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
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border rounded-b-md
                                rounded-t-md border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none
                                focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Enter your registered email address"
                                onChange={handleInputChange}
                                value={email} />
                        </div>

                    </div>

                    <div>
                        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border
                        border-transparent text-sm font-medium rounded-md text-white bg-coral-green
                        hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-offset-2
                        focus:ring-indigo-500">
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                
                                <svg className="h-5 w-5 text-green-200 group-hover:text-green-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                            </span>
                            Proceed
                        </button>
                    </div>

                </form>

            </div>
        </div>
    );
};

export default ForgetPassword;
