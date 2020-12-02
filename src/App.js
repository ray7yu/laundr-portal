import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Portal from './pages/Portal';
import Login from './pages/Login';
import withAuth from './hoc/withAuth';
const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path ='/login'>
            <Login />
          </Route>
          <Route exact path='/' component={withAuth(Login)} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
