import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Triangle from '../../../images/bg-triangle.svg';
import Rock from '../../../images/icon-rock.svg';
import Paper from '../../../images/icon-paper.svg';
import Scissors from '../../../images/icon-scissors.svg';

import './styles.scss';

const Play = ({ setMyChoice }) => {
  const setChoice = (event) => {
    setMyChoice(event.target.dataset.id);
  };

  return (
    <div className="play">
      <img src={Triangle} alt="triangle" className="triangle" />
      <div className="items">
        <div className="rock">
          <Link to="/game">
            <img src={Rock} data-id="rock" alt="rock" onClick={setChoice} className="icon icon--rock" />
          </Link>
        </div>
        <div className="paper">
          <Link to="/game">
            <img src={Paper} data-id="paper" alt="paper" onClick={setChoice} className="icon icon--paper" />
          </Link>
        </div>
        <div className="scissors">
          <Link to="/game">
            <img src={Scissors} data-id="scissors" alt="scissors" onClick={setChoice} className="icon icon--scissors" />
          </Link>
        </div>
      </div>
    </div>
  );
};

Play.propTypes = {
  setMyChoice: PropTypes.func.isRequired,
};

export default Play;
