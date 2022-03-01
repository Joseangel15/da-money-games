import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import StartScreen from './components/StartScreen';
import GameMenu from './components/GameMenu';
import HeadsAndTails from './components/Games/HeadsAndTails';

function App() {
  return (
    <Router>
       <div className="App">
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
         </Switch>
      </div>
    </Router>
  );
}

export default App;
