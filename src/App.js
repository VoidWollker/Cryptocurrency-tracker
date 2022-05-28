import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {BrowserRouter, Route, Route} from 'react-router-dom'

import './App.css';

import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage'


function App() {
  const [coinsName, setCoinsName] = useState(['bitcoin', 'ethereum'])
  const [coins, setCoins] = useState([])

  const getData = async () => {
    try {
      const resCoins = []
      for (let coinName of coinsName){
        let coin = await axios.get('https://api.coingecko.com/api/v3/coins/' + coinName)
        resCoins.push(coin.data)
      }

      let usd = {name: 'USD', symbol: 'usd', market_data: {current_price: {}}}
      for (let currency of resCoins){
        usd.market_data.current_price[currency.id] =  1 / currency.market_data.current_price.usd
      }
      resCoins.push(usd)

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
          <Route path='/' element={<HomePage coins={coins} coinsName={coinsName}/>}/>
          <Route path="/profile"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;