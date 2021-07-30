import React, {useEffect, useState} from 'react';
import {Spinner} from "react-bootstrap";
import './viewsStyles/loadingStyles.css'

function Loading({isLoading}) {

    const [spinnerColor, setSpinnerColor] = useState('primary');

    function changeSpinnerColor(){
        const colorIndex = Math.floor(Math.random()*6);
        console.log(colorIndex)


        switch (colorIndex){
            case 0:
                setSpinnerColor('primary')
                break
            case 1:
                setSpinnerColor('secondary')

                break
            case 2:
                setSpinnerColor('success')


                break
            case 3:
                setSpinnerColor('danger')


                break
            case 4:
                setSpinnerColor('warning')


                break
            case 5:
                setSpinnerColor('info')


                break
            case 6:
                setSpinnerColor('dark')


                break
        }
    }

    useEffect(()=>{
        if(isLoading){
            setInterval(()=>{
                changeSpinnerColor();
            },1500)
        }


    },[isLoading])
    return (
        <div className={'loading-view'}>
            <div className="spinner-container">
                <h1>Cargando...</h1>
                <Spinner className={'Spinner'} animation="grow" role="status" variant={spinnerColor} size={''}/>
            </div>

        </div>
    );
}

export default Loading;