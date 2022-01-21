import React, { useState } from 'react';
import Modal from 'src/components/Footer/Modal';

import './styles.scss';

const Footer = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <>
      <footer className="footer">
        <div className="attribution">
          <p>Challenge by<a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer"> Frontend Mentor</a>.</p>
          <p> Coded by <a href="https://cedricleizour.netlify.app" target="_blank" rel="noreferrer">Cédric Leizour</a>.</p>
        </div>
        <button className="rules" type="button" onClick={toggle}>
          Rules
        </button>
      </footer>
      {modal ? <Modal toggle={toggle} /> : null}
    </>
  );
};

export default Footer;
