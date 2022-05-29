import React, { useEffect } from "react";
import { Button, Input, Table } from 'reactstrap'

import TableRow from "../TableRow/TableRow";
import './TableComponent.scss'

export default function TableComponent({currencyProfileList, holding, addToHolding, subtractFromHolding}){

    useEffect(() =>{
        //console.log(holding);
    }, [currencyProfileList, holding])

    return(
        <Table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Coin</th>
                    <th></th>
                    <th>Price</th>
                    <th>24h</th>
                    <th>Holding</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {currencyProfileList.map((coin) =>{
                    return(<TableRow 
                            coin={coin} 
                            holding={holding} 
                            addToHolding={addToHolding}
                            subtractFromHolding={subtractFromHolding}
                        />)
                })}
            </tbody>
        </Table>
    )
}
