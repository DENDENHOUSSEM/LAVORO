

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import './App.css'; 


import UserStatistics from './tst/UserStatistics';
import UserList from'./tst/UserList';
import UserDetails from'./tst/UserDetails';

function App() {


  return (
    <Router>
    <div className="navigation">
    <p className="instruction">Choose between:</p>
    <nav>
      <ul>
        <li>
          <a href="/UserList">UserList</a>
        </li>
        <li>
          <a href="/UserStatistics">UserStatistics</a>
        </li>
      </ul>
    </nav>
     
        <Switch>
          <Route path="/UserList">
            <UserList />
          </Route>
          <Route path="/UserStatistics">
            <UserStatistics />
          </Route>
          <Route path="/UserDetails/:userId">
            <UserDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default App;

