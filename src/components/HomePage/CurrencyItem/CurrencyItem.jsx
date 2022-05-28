import React from "react"
import './CurrencyItem.scss'

export default function CurrencyItem({labelText, currencyPrice}) {
    return (
        <div className="currencyItem">
            <label>{labelText}</label>
            <p className="currencyItem-currencyPrice">{currencyPrice} $</p>
        </div>
    )
}