import React, { useEffect, useState } from "react";

import Converter from "./Converter/Converter";
import CurrencyList from './CurrencyList/CurrencyList'
import CurrencyChart from './CurrencyChart/CurrencyChart'

import './HomePage.scss'

export default function ReviewPage({coins, coinsName, prices}){
    const [selectedCurrency, setSelectedCurrency] = useState(0)

    useEffect(() =>{
    })

    return(
        <div className="reviewPage">
           <CurrencyList currencyArray={coins} setSelectedCurrency={setSelectedCurrency}/>
           <Converter currencyNames={coinsName} coins={coins} selectedCurrency={selectedCurrency}/>
           <div className="currencyChart">
            <CurrencyChart prices={prices[selectedCurrency]}/>
           </div>
        </div>
    )
}