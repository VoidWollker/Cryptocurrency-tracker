import React, { useState } from "react";
import CurrencyItem from "../CurrencyItem/CurrencyItem";

import'./CurrencyList.scss' 

export default function CurrencyList({currencyArrayProps}) {
    const [currencyArray, setCurrencyArray] = useState([])

    return(
        <div className="currencyList">
        <h2>Current prices of coins</h2>    
        {currencyArrayProps.map((currency =>{
            return(
                <CurrencyItem
                    labelText={currency.name}
                    currencyPrice={currency.market_data.current_price.usd}
                    key={currency.id}
                />
            )
        }))}
    </div>
    )
}