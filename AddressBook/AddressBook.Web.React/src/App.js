import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import home from './pages/home';
import addressbook from './pages/addressbook';

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Switch>
          <Route exact path="/" component={home} /> 
          <Route exact path="/addressbook" component={addressbook} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
