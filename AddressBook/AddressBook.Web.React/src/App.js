import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import home from './pages/home';
import UserBook from './pages/UserBook';
function App() {
  return (
      <div className="wrapper">
        <Router>
          <Switch>
            <Route exact path="/" component={home} /> 
            <Route exact path="/userbook" component={UserBook} />
          </Switch>
        </Router>
      </div>
  );
}

export default App;
