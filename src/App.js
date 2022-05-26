import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import './App.css';

import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header userName='Roman Nichipurenko' userPhoto=''/>
        <Switch>
          <Route path="/review">
            
          </Route>
          <Route path="/profile">

          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
