import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import StartScreen from './components/StartScreen';
import GameMenu from './components/GameMenu';
import HeadsAndTails from './components/Games/HeadsAndTails';
import RockPaperScissors from './components/Games/RockPaperScissors';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
       <div className="App">
         <Header />
         <Switch>
           <Route exact path="/">
              <StartScreen />
           </Route>
           <Route  exact path="/game-menu">
              <GameMenu />
           </Route>
           <Route exact path="/heads-and-tails">
              <HeadsAndTails />
           </Route>
           <Route exact path="/rock-paper-scissors">
             <RockPaperScissors />
           </Route>
         </Switch>
         <Footer />
      </div>
    </Router>
  );
}

export default App;
