import React, {useEffect, useState} from 'react';

import './viewsStyles/welcomeStyles.css'
import Button from "react-bootstrap/Button";
import {InputGroup} from "react-bootstrap";
import {FormControl} from "react-bootstrap";
import {Form} from "react-bootstrap";
import authProvider from "../provider/authProvider";


function Welcome({continueHandling}) {


    const [continueButtonOn, SetContinueButtonDisabled] = useState(true);

    const [tokenValue, SetTokenValue] = useState('');

    useEffect(()=>{
        console.log(tokenValue.length);
        if (tokenValue) {
            if (tokenValue.length === 24) {
                SetContinueButtonDisabled(false)
            } else {
                SetContinueButtonDisabled(true);
            }
        }
    },[tokenValue])

    function continueClickButton(){
        continueHandling(authProvider(tokenValue));

    }

    return (
        <div className={'welcome'}>

            <h1 className={''}>Bienvenid@</h1>
            <form action="">

                <Form.Label htmlFor="basic-url">Inserta tu código</Form.Label>
                <InputGroup className="mb-3">

                    <FormControl className={'form-control'} id="basic-url" aria-describedby="basic-addon3" onChange={(e)=>{SetTokenValue(e.target.value)}}/>
                </InputGroup>
            </form>

            <Button variant="primary" disabled={continueButtonOn} onClick={continueClickButton}>Continuar</Button>
        </div>
    );
}

export default Welcome;