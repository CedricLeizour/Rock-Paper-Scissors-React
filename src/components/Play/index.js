import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const Play = (setMyChoice) => {

  const setChoice = (event) => {
    setMyChoice(event.target.dataset.id);
  }

  return (
    <div className="play">
      <Link to="/game">
        <div data-id="paper" onClick={setChoice} className="icon icon--paper">Paper</div>
      </Link>
      <Link to="/game">
        <div data-id="rock" onClick={setChoice} className="icon icon--rock">Rock</div>
      </Link>
      <Link to="/game">
        <div data-id="scissors" onClick={setChoice} className="icon icon--scissors">Scissors</div>
      </Link>
    </div>
  );
};

export default Play;
