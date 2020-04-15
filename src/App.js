import React from 'react';
import Homepage from './page/Homepage';
import LessonDetail from './page/LessonDetail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Link to="/detail">
          <span>LessonDetail</span>
        </Link>
        <span>&nbsp;&nbsp;</span>
        <Link to="/">
          <span>Homepage</span>
        </Link> */}
        <Switch>
          <Route exact path="/">
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
