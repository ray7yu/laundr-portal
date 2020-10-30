import React from 'react';

import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import Portal from './pages/Portal';
import Login from './pages/Login';
import Navbar from './components/navbar.component';
import createUser from './components/createUser.component';
import editOrder from './components/editOrder.component';
import createOrder from './components/createOrder.component';
import editUser from './components/editUser.component';


function App() {
  return (
    <Router>       
      <div className ="container">    
      <Navbar /> 
      <br/>
      <Route path="/" exact component ={Portal} />
      <Route path="/edit/:id" exact component ={editUser} />
      <Route path="/createOrder" exact component ={createOrder} />
      <Route path="/CreateUser" exact component ={createUser} />
      <Route path="/editOrder" exact component ={editOrder} />
      </div>
    </Router>
    /*
    <div className="App">
      <Router>
        <Switch>
          <Route exact path ='/login'>
            <Login />
          </Route>
          <Route exact path='/'>
            <Portal />
          </Route>
        </Switch>
      </Router>
      */    
  );
}


export default App;
