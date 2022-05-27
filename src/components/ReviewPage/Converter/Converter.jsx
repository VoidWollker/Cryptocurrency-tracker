import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons'
import React, { Component } from "react";
import {Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, InputGroup} from 'reactstrap';

import './Converter.scss'

export default class Converter extends Component{
    constructor(props){
        super(props)
        this.toggleLeftDropDown = this.toggleLeftDropDown.bind(this);
        this.toggleRigthDropDown = this.toggleRigthDropDown.bind(this);
        this.chooseItem = this.chooseItem.bind(this)
        this.changeInputValue = this.changeInputValue.bind(this);
        this.state = {
            leftInputValue: '',
            leftDropdownOpen: false,
            leftDropdownSelectedIndex: 0,
            leftDropdownValue: this.props.currentCurrency,
            
            rigthInputValue: '',
            rigthDropdownOpen: false,
            rigthDropdownSelectedIndex: 0,
            rigthDropdownValue: this.props.currentCurrency,

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
    
    changeInputValue(event, choosenInput){
        if (choosenInput=='left') {
            this.setState({
                leftInputValue: event.target.value.replace(/\D/g, '')
            })
            console.log(this.state.coins);
            if (this.state.rigthDropdownValue == 'usd'){
                //rigthInputValue: leftInputValue * coins[this.state.leftDropdownValue]
            }
        }
        else if (choosenInput=='rigth'){
            console.log(event.target);
            this.setState({
                rigthInputValue: (event.target.value.replace(/\D/g, ''))
            })
        }
    }

    chooseItem(event, choosenDropDown, choosenCurrency, index){
        if (choosenDropDown=='left') {
            this.setState({
                leftDropdownValue: choosenCurrency,
                leftDropdownSelectedIndex: index
            })
        }
        else if (choosenDropDown=='rigth'){
            this.setState({
                rigthDropdownValue: choosenCurrency,
                rigthDropdownSelectedIndex: index
            })
        }
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