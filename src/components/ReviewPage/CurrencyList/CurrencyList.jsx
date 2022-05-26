import React, { useState } from "react";
import CurrencyItem from "../CurrencyItem/CurrencyItem";

import'./CurrencyList.scss' 

export default function CurrencyList({currencyArray}) {
    const [currencyArray, setCurrencyArray] = useState(currencyArray)

    return(
        <div class="currencyList">
        <h2>Current prices of coins</h2>    
        {currencyArray.map((currency =>{
            return(
                <CurrencyItem
                    labelText={currency.name}
                    currencyPrice={currency.price}
                />
            )
        }))}
        <CurrencyItem   
        />
    </div>
    )
}