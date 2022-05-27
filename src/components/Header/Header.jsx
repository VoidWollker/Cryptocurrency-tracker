import React from "react";
import {Link, Router} from 'react-router-dom'

import './Header.scss'

export default function Header({userName, userPhoto}){

    return(
        <header className="header">
            <div className="header-company">
                <Link to="">
                    <img src="https://bs.world/templates/wss/images/logo.svg" alt=""/>
                    <p className="">Blockchain Solutions</p>
                </Link>
            </div>
            <div className="header-account row">
                <Link to="profile">
                    <p className="header-account-name">{userName}</p>
                    <img src={userPhoto} alt="" className="header-account-photo"/>
                </Link>
            </div>
        </header>
    )
}