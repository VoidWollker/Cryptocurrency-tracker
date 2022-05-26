import React, { useState } from "react";
import CurrencyItem from "../CurrencyItem/CurrencyItem";

import'./CurrencyList.scss' 

export default function CurrencyList({currencyArrayProps}) {
    const [currencyArray, setCurrencyArray] = useState(currencyArrayProps)

    return(
        <div className="currencyList">
        <h2>Current prices of coins</h2>    
        {currencyArray.map((currency =>{
            return(
                <CurrencyItem
                    labelText={currency.name}
                    currencyPrice={currency.price}
                    key={currency.id}
                />
            )
        }))}
    </div>
    )
}