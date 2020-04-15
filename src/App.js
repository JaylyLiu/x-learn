import React from 'react';
import Homepage from './page/Homepage';
import LessonDetail from './page/LessonDetail';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/x-learn/detail">
          <span>LessonDetail</span>
        </Link>
        <span>&nbsp;&nbsp;1</span>
        <Link to="/x-learn/homepage">
          <span>Homepage</span>
        </Link>
        <Switch>
          <Route exact path="/homepage">
            <Homepage />
          </Route>
          <Route path="/detail">
            <LessonDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
