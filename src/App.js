import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Portal from './pages/Portal';
const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Portal />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
