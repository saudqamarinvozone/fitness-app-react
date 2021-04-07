import { Switch, Route } from "react-router-dom";

import Register from './components/auth/register';
import Login from './components/auth/login';
import ForgetPassword from './components/auth/forgetPassword';
import ResetPassword from './components/auth/resetPassword';
import DashboardMain from "./components/dashboard/layouts";

function App() {
  return (

    <Switch>
        
      <Route path="/signin">
        <Login />
      </Route>
      
      <Route path="/register">
        <Register />
      </Route>
      
      <Route path="/forget-password" render={(props) => (<ForgetPassword {...props} />)} />
            
      <Route path="/reset-password" render={(props) => (<ResetPassword {...props} />)} />
      <Route path="/dashboard">
        <DashboardMain />
      </Route>
    </Switch>
    
  );
}

export default App;
