import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import './App.css';

import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage'
import ProfilePage from './components/ProfilePage/ProfilePage';


function App() {
  const [coinsName, setCoinsName] = useState(['bitcoin', 'ethereum', 'solana', 'dogecoin'])
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
              .get('https://api.coingecko.com/api/v3/coins/' + coinName +'/market_chart?vs_currency=usd&days=14')
              .then((res) => res.data.prices)
          
        )
      )

      // const resCoins = []
      // for (let coinName of coinsName){
      //   let coin = await axios.get('https://api.coingecko.com/api/v3/coins/' + coinName)
      //   resCoins.push(coin.data)
      // }

      // let usd = {name: 'USD', symbol: 'usd', market_data: {current_price: {}}}
      // for (let currency of resCoins){
      //   usd.market_data.current_price[currency.id] =  1 / currency.market_data.current_price.usd
      // }
      // resCoins.push(usd)

      setCoins(resCoins);
      setPrices(resPrices);
    } catch (error) {
      console.error(error);
    }
  };

  // const getPrices = async () =>{
  //   let prices = await axios.get('https://api.coingecko.com/api/v3/coins/' + currency.id +'/market_chart?vs_currency=usd&days=14')
  //   prices = prices.data.prices.map(item => {
  //       return item[1]
  //   })
  //   setDataset(prices)
  // }


  useEffect(() => {
    getData();
    console.log(coins, prices);
  }, []);


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
  );
}

export default App;