import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import './App.css';

import Header from './components/Header/Header';
import CurrencyList from './components/ReviewPage/CurrencyList/CurrencyList';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Header userName='Roman Nichipurenko' userPhoto=''/>
        <Routes>
          <Route path="/review"
            element={
              <CurrencyList 
                currencyArrayProps={[{id: 1, name: 'BTC', price: 100}, {id: 2, name: 'ETH', price: 200}, {id: 3, name: 'USD', price: 150}]}
              />
            }
          />
          <Route path="/profile"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;