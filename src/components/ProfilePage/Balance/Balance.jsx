import React from "react";

import './Balance.scss'

export default function Balance({totalBalance, balanceChange}){
    return(
        <div className="balance">
            <div className="balance-item" id="totalBalance">
                    <p className="balance-item-sum">${totalBalance}</p>
                    <p className="balance-item-discription">Total Balance</p>
            </div>
            <div className="balance-item" id="balanceChange">
                    <p className="balance-item-sum">${balanceChange}</p>
                    <p className="balance-item-discription">24h Portfolio Change</p>
            </div>
        </div>
    )
}