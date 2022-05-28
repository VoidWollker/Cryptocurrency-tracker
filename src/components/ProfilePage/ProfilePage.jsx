import React, { Component } from "react";
import { Button, Dropdown, DropdownToggle, DropdownItem, DropdownMenu } from "reactstrap";
import Balance from "./Balance/Balance";
import Table from "./Table/Table";

import './ProfilePage.scss'

export default class ProfilePage extends Component{
    constructor(props){
        super(props)

        this.toogleDropDown = this.toogleDropDown.bind(this)
        this.addToCurrentCurrency = this.addToCurrentCurrency.bind(this)
        //this.removeFromCurrentCurrency = this.removeFromCurrentCurrency.bind(this)

        this.state = {
            dropDownOpen: false,
            coins: this.props.coins,
            currencyProfileList: [],
            balance: 0
        }
    }

    toogleDropDown(){
        this.setState({
            dropDownOpen: !this.state.dropDownOpen
        })
    }

    addToCurrentCurrency(coin){
        this.setState({
            currencyProfileList: [...this.state.currencyProfileList, coin]
        })
    }
    
    // removeFromCurrentCurrency(coin){
    //     const index = this.state.currencyProfileList.indexOf(coin);
    //     if (index > -1) {
    //         this.setState({
    //             currencyProfileList: this.state.currencyProfileList.splice(index, index)
    //         })
    //     }
    // }

    render(){
        return(
            <div className="profilePage">
                <div className="profilePage-header">
                    <h2>My Portfolio</h2>
                    <Dropdown isOpen={this.state.dropDownOpen} toggle={this.toogleDropDown}>
                        <DropdownToggle caret>Add New Coin</DropdownToggle>
                        <DropdownMenu>
                            {this.state.coins.map(currency =>{
                                if (!this.state.currencyProfileList.includes(currency)){
                                    return (<DropdownItem onClick={e => this.addToCurrentCurrency(currency)}>{currency.name}</DropdownItem>)
                                }
                            })}
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <Balance totalBalance={this.state.balance}/>
                <Table coins={this.state.currencyProfileList} delete={this.removeFromCurrentCurrency}/>
            </div>
        )
    }
}