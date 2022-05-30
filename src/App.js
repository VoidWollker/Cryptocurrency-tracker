import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import './App.css';

import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage'
import ProfilePage from './components/ProfilePage/ProfilePage';


function App() {
  const [loading, setLoading] = useState(true)
  const [coinsName, setCoinsName] = useState(['bitcoin', 'ethereum'])
  const [prices, setPrices] = useState([])
  const [coins, setCoins] = useState([])

  const getData =  async () => {
    try {

      const resCoins = await Promise.all(
        coinsName.map(
          (coinName) =>
            axios
              .get("https://api.coingecko.com/api/v3/coins/" + coinName)
              .then((res) => res.data)
        )
      )

      const resPrices = await Promise.all(
        coinsName.map(
          (coinName) =>
            axios
              .get('https://api.coingecko.com/api/v3/coins/' + coinName +'/market_chart?vs_currency=usd&days=14&interval=daily')
              .then((res) => res.data.prices)
          
        )
      )

      setCoins(resCoins);
      setPrices(resPrices);
      setLoading(false)
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
    getData();
  }, []);


  if (!loading){
    return (
      <div className="App">
        <BrowserRouter>
          <Header userName='Roman Nichipurenko' userPhoto=''/>
          <Routes>
            <Route path='/' element={<HomePage coins={coins} coinsName={coinsName} prices={prices}/>}/>
            <Route path="/profile" element={<ProfilePage coins={coins}/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    )}
}

export default App;