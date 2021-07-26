import React from 'react';
import {Spinner} from "react-bootstrap";
import './componentsStyles/spinnerLoader.css'

function SpinnerLoader(props) {
    return (

        <div className={'spinner-loader'}>
            <h4>Cargando...</h4>
            <Spinner animation="border" role="status" size={'xl'}/>
        </div>

    );
}

export default SpinnerLoader;