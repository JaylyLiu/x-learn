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
          <span>LessonDetail1</span>
        </Link>
        <span>&nbsp;&nbsp;</span>
        <Link to="/x-learn/homepage">
          <span>Homepage</span>
        </Link>
        <Switch>
          <Route exact path="/x-learn/homepage">
            <Homepage />
          </Route>
          <Route path="/x-learn/detail">
            <LessonDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
