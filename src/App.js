import { Switch, Route } from "react-router-dom";

import Register from './components/auth/Register';
import Login from './components/auth/Login';
import ForgetPassword from './components/auth/ForgetPassword';
import ResetPassword from './components/auth/ResetPassword';

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
           
    </Switch>
    
  );
}

export default App;
