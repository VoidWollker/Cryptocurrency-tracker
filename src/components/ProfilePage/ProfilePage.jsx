import React, { Component } from "react";
import { Button, Dropdown, DropdownToggle, DropdownItem, DropdownMenu } from "reactstrap";
import Balance from "./Balance/Balance";
import TableComponent from "./TableComponent/TableComponent";

import './ProfilePage.scss'
import HoldingChart from "./HoldingChart/HoldingChart";

export default class ProfilePage extends Component{
    constructor(props){
        super(props)

        this.toogleDropDown = this.toogleDropDown.bind(this)
        this.addToCurrentCurrency = this.addToCurrentCurrency.bind(this)
        this.addToHolding = this.addToHolding.bind(this)
        this.subtractFromHolding = this.subtractFromHolding.bind(this)
        this.calculateBalance =this.calculateBalance.bind(this)

        this.state = {
            dropDownOpen: false,
            coins: this.props.coins,
            currencyProfileList: [],
            holding: {},
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

    addToHolding(currnecyName, coinCount){
        if (this.state.holding[currnecyName] == NaN || this.state.holding[currnecyName] == undefined){
            this.setState({
                holding: {...this.state.holding,
                    [currnecyName]: coinCount}
            }, () => this.calculateBalance())
        }
        else{
            this.setState({
                holding: {...this.state.holding,
                    [currnecyName]: this.state.holding[currnecyName] + coinCount}
            }, () => this.calculateBalance())
        }
    }

    subtractFromHolding(currnecyName, coinCount){
        if (this.state.holding[currnecyName] == NaN || this.state.holding[currnecyName] == undefined){
            this.setState({
                holding: {...this.state.holding,
                    [currnecyName]: coinCount}
            }, () => this.calculateBalance())
        }
        else{
            let res = this.state.holding[currnecyName] - coinCount 
            if (res < 0) {res = 0}
            this.setState({
                holding: {...this.state.holding,
                    [currnecyName]: res}
            }, () => this.calculateBalance())
        }
        
    }
    
    calculateBalance(){
        let res = 0
        Object.keys(this.state.holding).forEach( item =>{
            this.state.coins.forEach(coin =>{
                if (coin.name == item){
                    res += coin.market_data.current_price.usd * this.state.holding[item]
                }
            })
        })
        this.setState({
            balance: res
        })
    }

    render(){
        return(
            <div className="profilePage">
                <div className="profilePage-header">
                    <h2>My Portfolio</h2>
                    <Dropdown isOpen={this.state.dropDownOpen} toggle={this.toogleDropDown} >
                        <DropdownToggle caret className='profilePage-header-button'>Add New Coin</DropdownToggle>
                        <DropdownMenu>
                            {this.state.coins.map(currency =>{
                                if (!this.state.currencyProfileList.includes(currency)){
                                    return (<DropdownItem onClick={e => this.addToCurrentCurrency(currency)}>{currency.name}</DropdownItem>)
                                }
                            })}
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <Balance balance={this.state.balance}/>
                <TableComponent 
                    currencyProfileList={this.state.currencyProfileList} 
                    holding={this.state.holding} 
                    addToHolding={this.addToHolding}
                    subtractFromHolding={this.subtractFromHolding}
                />
                <div className='holdingChart'>
                    <HoldingChart holding={this.state.holding} />
                </div>
            </div>
        )
    }
}