import React, { useState } from "react";
import CurrencyItem from "../CurrencyItem/CurrencyItem";

import'./CurrencyList.scss' 

export default function CurrencyList({currencyArray, setSelectedCurrency}) {

    return(
        <div className="currencyList">
        <h2>Current prices of coins</h2>    
        {currencyArray.map((currency, index) =>{
            if (currency.name != 'USD'){
                return(
                    <CurrencyItem
                        setSelectedCurrency={setSelectedCurrency}
                        selectedIndex={index}
                        coin={currency}
                        key={currency.id}
                    />
                )
            }
        })}
    </div>
    )
}