import React from 'react';
import { Route } from 'react-router';

import Header from './header';
import Dashboard from '../dashboard';

const DashboardMain = () => {
    
    return (
        <div>
        
            <Header />
        
            <Route path="/dashboard">
                <Dashboard />
            </Route>
            
        </div>
    );
};

export default DashboardMain;
