import React, { useState } from "react";
import CurrencyItem from "../CurrencyItem/CurrencyItem";

import'./CurrencyList.scss' 

export default function CurrencyList({currencyArray}) {

    return(
        <div className="currencyList">
        <h2>Current prices of coins</h2>    
        {currencyArray.map((currency =>{
            if (currency.name != 'USD'){
                return(
                    <CurrencyItem
                        labelText={currency.name}
                        currencyPrice={currency.market_data.current_price.usd}
                        key={currency.id}
                    />
                )
            }
        }))}
    </div>
    )
}