import React, { useEffect, useState } from "react";

import Converter from "./Converter/Converter";
import CurrencyList from './CurrencyList/CurrencyList'
import CurrencyChart from './CurrencyChart/CurrencyChart'

export default function ReviewPage({coins, coinsName}){
    const [selectedCurrency, setSelectedCurrency] = useState({})

    return(
        <div className="reviewPage">
           <CurrencyList currencyArray={coins} setSelectedCurrency={setSelectedCurrency}/>
           <Converter currencyNames={coinsName} coins={coins}/>
           <CurrencyChart currency={selectedCurrency}/>
        </div>
    )
}