import React from "react";
import BootstrapTable from "react-bootstrap-table-next/lib/src/bootstrap-table";
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { Button, Input } from 'reactstrap'

import './Table.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Table(props){

    const columns = [{
        dataField: 'market_cap_rank',
        text: '#',
        headerStyle: {
            width: '5%'
        }
      }, {
        dataField: 'name',
        text: 'Coin',
        headerStyle: {
            width: '15%'
        }
      }, {
        dataField: 'symbol',
        text: '',
        headerStyle: {
            width: '5%'
        }
      },{
        dataField: 'market_data.current_price.usd',
        text: 'Price',
        headerStyle: {
            width: '17%'
        },
        formatter: (cell) =>(
            <span>${cell}</span>
        )
      },{
        dataField: 'market_data.price_change_percentage_1h_in_currency.usd',
        text: '1h',
        headerStyle: {
            width: '17%'
        },
        formatter: (cell, row) =>(
            <span>{cell}%</span>
        )
      }, {
        dataField: 'market_data.price_change_percentage_24h_in_currency.usd',
        text: '24h',
        headerStyle: {
            width: '17%'
        },
        formatter: (cell) =>(
            <span>{cell}%</span>
        )
      },{
        formatter: (rowIndex) =>(
            <div className="buttonsRow">
                <Button className="buttonsRow-button">+</Button>
                <Input className="buttonsRow-input"/>
                <Button className="buttonsRow-button">-</Button>
                <Button className="buttonsRow-button" onClick={e => console.log(e)}><FontAwesomeIcon icon={faTrash}/></Button>
            </div>
        )
      }
    ];

    return(
        <div className="table">
        <BootstrapTable 
            keyField='id' 
            columns={columns} 
            data={props.coins}
            bordered={false}
        />
        </div>
    )
}