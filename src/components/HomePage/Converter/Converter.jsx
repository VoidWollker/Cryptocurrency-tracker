import React, { useEffect, useState } from "react";
import {Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, InputGroup, InputGroupText} from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons'

import './Converter.scss'

export default function Converter({coins, selectedCurrency}){
    const [rigthInputVale, setRigthInputValue] = useState('')
    const [leftInputVale, setLeftInputValue] = useState('')
    const [selectedDropdownItem, setSelectedDropdownItem] = useState(coins[0].name)
    const [selectedDropdownIndex, setSelectedDropdownIndex] = useState(0)
    const [openDropdown, setOpenDropdown] = useState(false)

    const chooseItem = (choosenCurrencyName, choosenCurrencyIndex) =>{
        setSelectedDropdownItem(choosenCurrencyName)
        setSelectedDropdownIndex(choosenCurrencyIndex)
        calculate()
    }

    const calculate = () =>{
        if (selectedDropdownItem == 'USD'){
            setRigthInputValue(Number(leftInputVale) *
                coins[selectedCurrency].market_data.current_price.usd)
        }
        else{
            setRigthInputValue((Number(leftInputVale) *
                coins[selectedCurrency].market_data.current_price.usd) /
                coins[selectedDropdownIndex].market_data.current_price.usd)
        }
    }

    const changeInputValue = (e) =>{
        let validNumber = new RegExp(/^\d*\.?\d*$/)
        if (validNumber.test(e.target.value)){setLeftInputValue(e.target.value)}
    }

    useEffect(() =>{
        calculate()
    }, [selectedCurrency, leftInputVale, selectedDropdownItem])

    return(
        <div className="converter">
                <InputGroup className="converter-inputGroup">
                    <InputGroupText>{coins[selectedCurrency].name}</InputGroupText>
                    <Input value={leftInputVale} 
                        onChange={(e) => {changeInputValue(e); calculate()}}/>
                </InputGroup>
                <FontAwesomeIcon icon={faArrowRightArrowLeft} className="converter-arrows"/>
                <InputGroup className="converter-inputGroup">
                    <Dropdown isOpen={openDropdown} toggle={e => setOpenDropdown(!openDropdown)}>
                        <DropdownToggle caret>{selectedDropdownItem}</DropdownToggle>
                        <DropdownMenu>
                            {coins.map((coin, index) =>{
                                if (coin.name !== selectedDropdownItem.name) return(
                                    <DropdownItem onClick={() => {chooseItem(coin.name, index)}}>{coin.name}</DropdownItem>
                                )
                            })}
                            <DropdownItem onClick={() => {chooseItem('USD', coins.length)}}>USD</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <Input value={rigthInputVale} onChange={e => {setRigthInputValue(e.target.value.replace(/\D/g, ''))}} disabled/>
                </InputGroup>
            </div>
    )

}