import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="green darken-3">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo center">
              Listas
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
