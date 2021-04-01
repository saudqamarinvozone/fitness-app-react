import React, { useState } from 'react';
import axios from 'axios';

const ResetPassword = (props) => {
    console.log(props.history);
    const initialState = {
        password: "",
        confirm_password: "",
    };

    const [{ password, confirm_password }, setState] = useState(initialState);
    const [{ email, reset_token }] = useState({
        email: props.location.state.email,
        reset_token: props.location.state.token
    });
    
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setState(
            prevState => ({ ...prevState, [name]: value })
        )
        
    }
    const clearState = () => {
        setState(initialState);
        props.history.replace(props.history.location.state, '');
    }
    const handleSubmit = async (event) => {

        event.preventDefault();
        
        await axios.post('http://localhost:5000/reset-password', {
            email,
            reset_token,
            password,
            confirm_password
        });
        clearState();
        window.location = '/signin';
    };
    
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">

                <div>
                    <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow"/>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Reset your password
                    </h2>
                </div>

                <form className="mt-8 space-y-6" onSubmit={ handleSubmit }>
            
                    <div className="rounded-md shadow-sm -space-y-px">
                        
                        <div>
                                         
                            <input id="password" name="password" type="password" required                    
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border
                                rounded-t-md border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none
                                focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="New password"
                                onChange={handleInputChange}
                                value={password} />
                        </div>
                        <div>
                                               
                            <input id="confirm_password" name="confirm_password" type="password" required                    
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border
                                rounded-b-md border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none
                                focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="confirm new password"
                                onChange={handleInputChange}
                                value={confirm_password} />
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border
                        border-transparent text-sm font-medium rounded-md text-white bg-indigo-600
                        hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2
                        focus:ring-indigo-500">
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                
                                <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                            </span>
                            Reset
                        </button>
                    </div>

                </form>

            </div>
        </div>
    );
};

export default ResetPassword;
