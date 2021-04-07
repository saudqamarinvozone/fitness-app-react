import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProtectedRoute({ component: Component, ...rest }) {

    const { AuthReducer } = useSelector(state => state);
    
    if (AuthReducer.loggedIn && AuthReducer.authToken && AuthReducer.user) {
 
        return (
            <Route
                {...rest}
                render={(props) => (
                    <Component {...props} />
                )}
            />
        );
        
    } else {
        return (
       
            <Redirect
			    to={{
			        pathname: '/signin',
                }}				
            />				
        );
    }
    
}

export default ProtectedRoute;