import React from 'react';

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

export default Header;
