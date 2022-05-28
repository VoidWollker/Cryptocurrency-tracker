import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons'
import React, { Component } from "react";
import {Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, InputGroup} from 'reactstrap';

import './Converter.scss'

export default class Converter extends Component{
    constructor(props){
        super(props)

        // let usd = {name: 'USD', symbol: 'usd', market_data: {current_price: {}}}
        // for (let currency of this.props.coins){
        //     usd.market_data.current_price[currency.id] =  1 / currency.market_data.current_price.usd
        // }
        // this.props.coins.push(usd)
        
        this.toggleLeftDropDown = this.toggleLeftDropDown.bind(this);
        this.toggleRigthDropDown = this.toggleRigthDropDown.bind(this);
        this.calculateCurrencyPrice = this.calculateCurrencyPrice.bind(this)
        this.chooseItem = this.chooseItem.bind(this)
        this.changeInputValue = this.changeInputValue.bind(this);

        this.state = {
            leftInputValue: '',
            leftDropdownOpen: false,
            leftDropdownSelectedIndex: 0,
            leftDropdownValue: this.props.currencyNames[0],
            
            rigthInputValue: '',
            rigthDropdownOpen: false,
            rigthDropdownSelectedIndex: 1,
            rigthDropdownValue: this.props.currencyNames[1],


            currencyNames: [...this.props.currencyNames, 'usd'],
            coins: this.props.coins
        };
    }

    toggleLeftDropDown() {
        this.setState({
            leftDropdownOpen: !this.state.leftDropdownOpen
        });
    }
    
    toggleRigthDropDown() {
        this.setState({
            rigthDropdownOpen: !this.state.rigthDropdownOpen
        });
    }

    chooseItem(event, choosenDropDown, choosenCurrencyName, choosenCurrencyIndex){
        let antiChoosenDropDown;
        if (choosenDropDown == 'rigth') {antiChoosenDropDown = 'left'}
        else { antiChoosenDropDown = 'rigth'}
        
        this.setState({
            [choosenDropDown + 'DropdownValue']: choosenCurrencyName,
            [choosenDropDown + 'DropdownSelectedIndex']: choosenCurrencyIndex
        })

        this.calculateCurrencyPrice(this.state[antiChoosenDropDown + 'InputValue'], choosenCurrencyIndex,
            this.state[antiChoosenDropDown + 'DropdownSelectedIndex'])
    }

    changeInputValue(event, choosenInput){

        let antiChoosenInput;
        if (choosenInput == 'rigth') {antiChoosenInput = 'left'}
        else { antiChoosenInput = 'rigth'}

        this.setState({
            [choosenInput + 'InputValue']: event.target.value.replace(/\D/g, '')
        })

        this.calculateCurrencyPrice(event.target.value.replace(/\D/g, ''), this.state[choosenInput + 'DropdownSelectedIndex'],
            this.state[antiChoosenInput + 'DropdownSelectedIndex'])
    }

    calculateCurrencyPrice(inputValue, beginCurrencyIndex, endCurrencyIndex){
        this.setState({
            rigthInputValue: Number(inputValue) * Number(this.state.coins[beginCurrencyIndex].market_data.current_price
                [this.state.coins[endCurrencyIndex].symbol])
        })
    }

    render(){
        return(
            <div className="converter">
                <InputGroup className="converter-inputGroup">
                    <Dropdown isOpen={this.state.leftDropdownOpen} toggle={this.toggleLeftDropDown}>
                        <DropdownToggle caret>{this.state.leftDropdownValue}</DropdownToggle>
                        <DropdownMenu>
                            {this.state.currencyNames.map((currencyName, index) =>{
                                if (currencyName !== this.state.leftDropdownValue) return(
                                    <DropdownItem onClick={(e) => this.chooseItem(e, 'left', currencyName, index)} id={'leftDropdownItem-'+index}>{currencyName}</DropdownItem>
                                )
                            })}
                        </DropdownMenu>
                    </Dropdown>
                    <Input onChange={(e) => this.changeInputValue(e, 'left')} value={this.state.leftInputValue}/>
                </InputGroup>
                <FontAwesomeIcon icon={faArrowRightArrowLeft} className="converter-arrows"/>
                <InputGroup className="converter-inputGroup">
                    <Dropdown isOpen={this.state.rigthDropdownOpen} toggle={this.toggleRigthDropDown}>
                        <DropdownToggle caret>{this.state.rigthDropdownValue}</DropdownToggle>
                        <DropdownMenu>
                            {this.state.currencyNames.map((currencyName, index) =>{
                                if (currencyName !== this.state.rigthDropdownValue) return(
                                    <DropdownItem onClick={(e) => this.chooseItem(e, 'rigth', currencyName, index)} id={'leftDropdownItem-'+index}>{currencyName}</DropdownItem>
                                )
                            })}
                        </DropdownMenu>
                    </Dropdown>
                    <Input onChange={(e) => this.changeInputValue(e, 'rigth')} value={this.state.rigthInputValue}/>
                </InputGroup>
            </div>
        )
    }
}