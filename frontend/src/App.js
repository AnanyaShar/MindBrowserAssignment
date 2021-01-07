import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import LoginScreen from './screens/Login';
import SignUpScreen from './screens/SignUp';
import DashboardScreen from './screens/Dashboard';

import './App.scss';

// Routes for the app have been declared using ReactRouter
function App() {
  return (
    <div className="App">
      <Router>
        {/* <TopBar /> */}
        <div className="app-layout">
          <Switch>
            <Route path="/" exact>
              <LoginScreen />
            </Route>
            <Route path="/signup">
              <SignUpScreen />
            </Route>
            <Route path="/dashboard" exact>
              <DashboardScreen />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
