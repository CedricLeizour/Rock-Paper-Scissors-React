// == Import npm
import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import Game from '../Game';
import Play from '../Play';

// == Import
import './styles.scss';

// == Composant
const App = () => {
  const [myChoice, setMyChoice] = useState('');
  const [score, setScore] = useState(0);

  return (
    <div className="app">
      <div className="container">
        <Header score={score} />
        <Switch>
          <Route exact path="/">
            <Play setMyChoice={setMyChoice} />
          </Route>
          <Route path="/game">
            <Game myChoice={myChoice} score={score} setScore={setScore} />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

// == Export
export default App;
