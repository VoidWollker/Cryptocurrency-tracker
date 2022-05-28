// state:
// coins - которые доступны, для передачи в Header и последующего добавляния в Table
// currentCoins - которые есть у человека, которые отображаются в Table
// blance

// Button+ 
// <Balance></Balance>
// <Table></Table>

import React, { Component } from "react";
import { Button } from "reactstrap";

export default class ProfilePage extends Component{
    constructor(props){
        super(props)
        this.state = {
            coins: this.props.coins,
            currencyProfileList: [],
            balance: 0
        }
    }

    render(){
        return(
            <div className="profilePage">
                <div className="profilePage-header">
                    <h2>My Portfolio</h2>
                    <Button>Add New Coin</Button>
                </div>
            </div>
        )
    }
}