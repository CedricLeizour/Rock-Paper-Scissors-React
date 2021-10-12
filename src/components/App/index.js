// == Import npm
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import Game from '../Game';
import Modal from '../Modal';
import Play from '../Play';

// == Import
import './styles.scss';

// == Composant
const App = () => {
return (
    <>
    <div className="app">
    <Header />
    <Switch>
      <Route exact path="/">
        <Play />
      </Route>
      <Route exact path="/">
        <Game />
      </Route>
    </Switch>
  </div>
  <Footer />
  </>
  );
};

// == Export
export default App;
