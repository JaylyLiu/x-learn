import React from 'react';
import Homepage from './page/Homepage';
import LessonDetail from './page/LessonDetail';
import Schedule from './page/Schedule';
import LessonList from './page/LessonList';
import Profile from './page/Profile';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        {/* <Route path="/1">
          <Link to="/detail">
            <span>LessonDetail-2</span>
          </Link>
          <span>&nbsp;&nbsp;</span>
          <Link to="/homepage">
            <span>Homepage</span>
          </Link>
        </Route> */}
        <Route path="/homepage">
          <Homepage />
        </Route>
        <Route path="/detail">
          <LessonDetail />
        </Route>
        <Route path="/schedule">
          <Schedule />
        </Route>
        <Route path="/lessonlist">
          <LessonList />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </div>
    </HashRouter>
  );
}

export default App;
