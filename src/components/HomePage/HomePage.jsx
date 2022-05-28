import React from "react";

import Converter from "./Converter/Converter";
import CurrencyList from './CurrencyList/CurrencyList'

export default function ReviewPage({coins, coinsName}){
    console.log(coins);

    return(
        <div className="reviewPage">
           <CurrencyList currencyArray={coins}/>
           <Converter currencyNames={coinsName} coins={coins}/>
        </div>
    )
}