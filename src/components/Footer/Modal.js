import React from 'react';
import PropTypes from 'prop-types';
import close from '../../../images/icon-close.svg';
import rules from '../../../images/image-rules.svg';

import './styles.scss';

const Modal = ({ toggle }) => (
  <div className="modal-container">
    <div className="modal-box">
      <div className="modal__header">
        <h1>Rules</h1>
        <button type="button" onClick={toggle}>
          <img src={close} alt="Close" />
        </button>
      </div>
      <img src={rules} alt="Rules" />
    </div>
  </div>
);

Modal.propTypes = {
  toggle: PropTypes.func.isRequired,
};

export default Modal;
