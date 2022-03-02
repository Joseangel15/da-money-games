import React, { useState } from 'react';

import './RockPaperScissors.css';

const RockPaperScissors = props => {
    const [finalSelection, setFinalSelection] = useState('');

    const startCompetition = () => {
      let random = Math.floor(Math.random() * 3);
      let options = ['Rock', 'Paper', 'Scissors'];
      console.log(random)
      let finalForm
    
      setTimeout(() => {
        
        finalForm = options[random];
  
        setFinalSelection(finalForm);
        console.log(finalForm);
      }, 1000)
  
    }


    return (

        <div id='rps-main-container'>
            <div>
                <h1 className='rps-title'>Let's Play</h1>
                <button onClick={startCompetition}>Try Me!</button>
                <p>{finalSelection}</p>
            </div>
        </div>

    )

}

export default RockPaperScissors;