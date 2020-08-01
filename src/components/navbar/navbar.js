
// always import react in your component

import React from 'react';

// importing css

import '../../css/navbar/navbar.css';

// importing hamburger

import Hamburger from './hamburger';

// navbar component

const navbar = props => (
  <header className="page-header">
    <nav className="navbar">
      <div className="navbar-logo "><a href="/">Name Here</a></div> 

      {/* to push the logo and navlinks to each end */}

      <div className="between" />
      <div className="navbar-links ">
        <ul >
          <li><a href="/">About</a></li>
          <li><a href="/">Experience</a></li>
          <li><a href="/">Projects</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
      </div>
      <div>
        <Hamburger click={ props.hamClickHandler}/>
      </div>
    </nav>

  </header>
);

// export your component to use it

export default navbar;