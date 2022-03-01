import React from 'react';

import disruptiveLogo from '../assets/disruptiveLogo.png';
import './StartScreen.css';


const StartScreen = props => {

    return (

        <div className='main-body'>
            <div className='main-menu'>
                <div>
                    <img className='main-logo' src={disruptiveLogo} />
                </div>
                <h1 className='main-title'>MONEY GAMES</h1>
                <a href='/game-menu' className='start-name'>START</a>
            </div>
        </div>

    )

}

export default StartScreen;