import React from 'react'

import coinImage from '../assets/coins-back-img.jpg';
import rockPaperScissors from '../assets/rock-paper-scissors.jpg';
import './GameMenu.css'

const GameMenu = (props) => {
  return (
    <div id="main-container">
      <div className='menu-container'>
        <h1>Money Games</h1>
        <div className='games-cont'>
          <div className='game-card' style={{ backgroundImage: `url(${coinImage})` }}>
            <a href="/heads-and-tails">
              <h2>Heads or Tails</h2>
            </a>
          </div>
          <div className='game-card' style={{ backgroundImage: `url(${rockPaperScissors})` }}>
            <a href="/rock-paper-scissors">
              <h2>Rock, Paper, Scissors</h2>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameMenu
