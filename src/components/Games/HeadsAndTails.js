import React, { useState } from 'react'

import './HeadAndTails.css'

const HeadsAndTails = (props) => {
  const [finalForm, setFinalForm] = useState('')

  const coinFlipper = () => {
    let random = Math.floor(Math.random() * 2) + 1
    console.log(random)
    let finalForm = "";

    setFinalForm(' ');

    setTimeout(() => {
      if (random === 1) {
        finalForm = 'heads'
      } else {
        finalForm = 'tails'
      }

      setFinalForm(finalForm);
      console.log(finalForm);
    }, 100)

  }

  return (
    <div className='main-body'>
      <div>
        <h1 className='ht-main-title'>FLIP ME</h1>
        <div>
          <p className="final-symbol">{finalForm}</p>
          <div onClick={coinFlipper} id="coin" className={finalForm}>
            <div className="side-a">
              <span>D</span>
            </div>
            <div className="side-b">
              <span>A</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeadsAndTails
