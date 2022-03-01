import React, { useState } from 'react';

const HeadsAndTails = props => {

    const [finalForm, setFinalForm] = useState('');

    const coinFlipper = () => {

        let random = Math.floor(Math.random() * 2) + 1
        console.log(random);
        let finalForm
        if(random === 1){
            finalForm = "Heads";
        }else{
            finalForm = "Tails"; 
        }

        setFinalForm(finalForm)

        console.log(finalForm)

    }

    return (

        <div>
            <h1>FLIP ME</h1>
            <button onClick={coinFlipper} className='coin-flipper-btn'>Flip this coin</button>
            <div>
                <p>Coin symbol</p>
                <p className='final-symbol'>{finalForm}</p>
            </div>
        </div>

    )

}

export default HeadsAndTails;