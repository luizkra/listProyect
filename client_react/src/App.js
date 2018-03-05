import React from 'react';
import './App.css';
import Main from './components/main';
import Navbar from './components/Navbar';
import {Link} from 'react-router-dom';

const App = () => (
  <div>
    <Navbar />
    <div className="container">
      <Main />
    </div>
    <div className="fixed-action-btn" />
  </div>
);

export default App;
