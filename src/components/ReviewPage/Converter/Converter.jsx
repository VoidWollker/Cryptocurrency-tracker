import React from "react";
import {FormGroup, Input, Label} from 'reactstrap'

import './Converter.sccs'

export default function Converter({labelText}){
    return(
        <div className="converter">
            <FormGroup className="row">
                <Label for="currencyInput">{labelText}</Label>
                <Input id="currencyInput"/>
            </FormGroup>
        </div>
    )
}