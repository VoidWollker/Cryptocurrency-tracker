import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import './App.css';

import Header from './components/Header/Header';
import CurrencyList from './components/ReviewPage/CurrencyList/CurrencyList';


function App() {
  const [coins, setCoins] = useState([]);

  const getData = async () => {
    try {
      const btc = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin')
      const eth = await axios.get('https://api.coingecko.com/api/v3/coins/ethereum')
      const resCoins = [btc.data, eth.data]
      console.log(resCoins);
      setCoins(resCoins);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);


  return (
    <div className="App">
      <BrowserRouter>
        <Header userName='Roman Nichipurenko' userPhoto=''/>
        <Routes>
          <Route path="/review"
            element={
              <CurrencyList 
                //currencyArrayProps={[{id: 1, name: 'BTC', price: 100}, {id: 2, name: 'ETH', price: 200}, {id: 3, name: 'USD', price: 150}]}
                currencyArrayProps={coins}
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