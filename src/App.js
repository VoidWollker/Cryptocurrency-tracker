import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import './App.css';

import Header from './components/Header/Header';
import Converter from './components/ReviewPage/Converter/Converter';
import CurrencyList from './components/ReviewPage/CurrencyList/CurrencyList';


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

      let usd = {symbol: 'usd', market_data: {current_price: {}}}
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
          <Route path='/'>
            <Route path="/review"
              element={
                <CurrencyList 
                  currencyArray={coins}
                />
              }
            />
            <Route path='/converter' element={<Converter currencyNames={coinsName} coins={coins}/>}/>
          </Route>
          <Route path="/profile"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;