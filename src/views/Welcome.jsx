import React from 'react';
import './viewsStyles/welcomeStyles.css'

import Button from "react-bootstrap/Button";
import {InputGroup} from "react-bootstrap";
import {FormControl} from "react-bootstrap";
import {Form} from "react-bootstrap";

function Welcome(props) {
    return (
        <div className={'welcome'}>

            <h1 className={''}>Bienvenid@</h1>

            <Form.Label htmlFor="basic-url">Inserta tu código</Form.Label>
            <InputGroup className="mb-3">

                <FormControl id="basic-url" aria-describedby="basic-addon3" />
            </InputGroup>

            <Button variant="primary" disabled>Continuar</Button>
        </div>
    );
}

export default Welcome;