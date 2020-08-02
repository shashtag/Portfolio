import React from "react";
// importing hamburger

import Hamburger from "./hamburger";

// navbar component

const navbar = props => (
  <header className="page-header">
    <nav className="navbar">
      <div className="navbar-logo ">
        <a className="name-link" href="/">
          Aviroop Nandy
        </a>
      </div>

      {/* to push the logo and navlinks to each end */}

      <div className="between" />
      <div className="navbar-links ">
        <ul>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="#exp">Experience</a>
          </li>
          <li>
            <a href="#proj">Projects</a>
          </li>
          <li>
            <a href="#contact-main">Contact</a>
          </li>
        </ul>
      </div>
      <div>
        <Hamburger click={props.hamClickHandler} />
      </div>
    </nav>
  </header>
);

// export your component to use it

export default navbar;
