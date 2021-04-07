import { Switch, Route, Redirect} from "react-router-dom";

import Register from './components/auth/register';
import Login from './components/auth/login';
import ForgetPassword from './components/auth/forgetPassword';
import ResetPassword from './components/auth/resetPassword';
import DashboardMain from "./components/dashboard/layouts";
import ProtectedRoute from "./components/ common/protectedRoute";

function App() {
  return (

    <Switch>
        
      <Route path="/signin" component={ Login } />
      <Route path="/register" component={ Register }/>
      <Route path="/forget-password" render={(props) => (<ForgetPassword {...props} />)} />
      <Route path="/reset-password" render={(props) => (<ResetPassword {...props} />)} />

      <ProtectedRoute path="/dashboard" component={ DashboardMain } />
      <Redirect from="/" exatc to="/dashboard" />

    </Switch>
    
  );
}

export default App;
