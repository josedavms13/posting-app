import React, {useEffect, useState} from 'react';
import './componentsStyles/nonAuthToken.css'

function NonAuthToken({mode}) {

    const unAuthTheme = {
        backgroundColor : "#980226",
    }
    const invalidTokenTheme={
        backgroundColor: '#2e93e3',
        color: 'black'
    }

    const [tittleLabel, setTittleLabel] = useState('');
    const [cardColor, setCardColor] = useState(invalidTokenTheme);


    useEffect(()=>{
        switch (mode){
            case 1:
                setTittleLabel('Non Auth Toke');
                setCardColor(unAuthTheme);
                break
            case 2:
                setTittleLabel('Invalid token, please ask for one');
                setCardColor(invalidTokenTheme);
                break
        }
    },[mode])


    return (
        <div className={'non-auth-token'} style={cardColor}>
            <div className="tittle" >

                <h1>{tittleLabel}</h1>
            </div>
        </div>
    );
}

export default NonAuthToken;