import React from "react"
import './CurrencyItem.scss'

export default function CurrencyItem({coin, setSelectedCurrency, selectedIndex}) {
    return (
        <div className="currencyItem" onClick={e => setSelectedCurrency(selectedIndex)}>
            <label>{coin.name}</label>
            <p className="currencyItem-currencyPrice">{coin.market_data.current_price.usd} $</p>
        </div>
    )
}