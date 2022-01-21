import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './styles.scss';

const Game = ({ score, myChoice, setScore }) => {
  const [opponent, setOpponent] = useState('');
  const [playerWin, setPlayerWin] = useState('');

  const [counter, setCounter] = useState(3);

  const newOpponentPick = () => {
    const choices = ['rock', 'paper', 'scissors'];
    setOpponent(choices[Math.floor(Math.random() * 3)]);
  };

  useEffect(() => {
    newOpponentPick();
  }, []);

  const Result = () => {
    if (myChoice === 'rock' && opponent === 'scissors') {
      setPlayerWin('win');
      setScore(score + 1);
    }
    else if (myChoice === 'rock' && opponent === 'paper') {
      setPlayerWin('lose');
      setScore(score - 1);
    }
    else if (myChoice === 'paper' && opponent === 'rock') {
      setPlayerWin('win');
      setScore(score + 1);
    }
    else if (myChoice === 'paper' && opponent === 'scissors') {
      setPlayerWin('lose');
      setScore(score - 1);
    }
    else if (myChoice === 'scissors' && opponent === 'paper') {
      setPlayerWin('win');
      setScore(score + 1);
    }
    else if (myChoice === 'scissors' && opponent === 'rock') {
      setPlayerWin('lose');
      setScore(score - 1);
    }
    else {
      setPlayerWin('draw');
    }
  };

  useEffect(() => {
    const timer = counter > 0 ? setInterval(() => {
      setCounter(counter - 1);
    }, 750) : Result();
    return () => {
      clearInterval(timer);
    };
  }, [counter, opponent]);

  return (
    <div className="result">
      <div className="result__you">
        <span className="text">Your Choice</span>
        <div className={`icon icon--${myChoice} ${playerWin === 'win' ? `icon icon--${myChoice}--winner` : ''}`} />
      </div>
      {playerWin === 'win' && (
      <div className="result__play">
        <span className="text">You Win</span>
        <Link to="/" className="play-again" onClick={() => setOpponent()}>
          Play Again
        </Link>
      </div>
      )}
      {playerWin === 'lose' && (
      <div className="result__play">
        <span className="text">You Lose</span>
        <Link to="/" className="play-again" onClick={() => setOpponent()}>
          Play Again
        </Link>
      </div>
      )}
      {playerWin === 'draw' && (
      <div className="result__play">
        <span className="text">Draw</span>
        <Link to="/" className="play-again" onClick={() => setOpponent()}>
          Try Again
        </Link>
      </div>
      )}

      <div className="result__opponent">
        <span className="text">Opponent Choice</span>
        {counter === 0 ? (
          <div
            className={`icon icon--${opponent} ${
              playerWin === 'lose' ? `icon icon--${opponent}--winner` : ''}`}
          />
        )
          : (<div className="counter">{counter}</div>
          )}
      </div>
    </div>
  );
};

Game.propTypes = {
  score: PropTypes.string.isRequired,
  myChoice: PropTypes.string.isRequired,
  setScore: PropTypes.string.isRequired,
};

export default Game;
