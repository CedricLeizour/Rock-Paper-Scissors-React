import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Header = ({ score }) => (
  <div className="header">
    <div className="text">
      <span>Rock</span>
      <span>Paper</span>
      <span>Scissors</span>
    </div>
    <div className="your-score">
      <span>Your Score : </span>
      <div className="actual-score">{score}</div>
    </div>
  </div>
);

Header.propTypes = {
  score: PropTypes.string.isRequired,
};

export default Header;
