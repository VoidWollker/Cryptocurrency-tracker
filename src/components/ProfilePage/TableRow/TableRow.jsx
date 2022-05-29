import React, { useState } from "react";
import { Button, Input, InputGroup } from 'reactstrap'

export default function TableRow({coin, holding, addToHolding, subtractFromHolding}){
    const [inputValue, setInputValue] = useState('');

    return(
        <tr>
            <td>{coin.market_cap_rank}</td>
            <td>{coin.name}</td>
            <td>{coin.symbol}</td>
            <td>{coin.market_data.current_price.usd}</td>
            <td>{coin.market_data.price_change_percentage_24h}</td>
            <td>{holding[coin.name]}</td>
            <td>
                <InputGroup>
                    <Button onClick={e => addToHolding(coin.name, Number(inputValue))}>+</Button>
                    <Input value={inputValue} onChange={e => setInputValue(e.target.value.replace(/\D/g, ''))}></Input>
                    <Button onClick={e => subtractFromHolding(coin.name, Number(inputValue))}>-</Button>
                    <Button>&#10008;</Button>
                </InputGroup>
            </td>
        </tr>
    )
}