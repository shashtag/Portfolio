import React from "react";

// hamburger menu to be used in navbar

const hamburger = props => (
  <button className="hamburger" onClick={props.click}>
    <div className="hamburger-line" />
    <div className="hamburger-line" />
    <div className="hamburger-line" />
  </button>
);

export default hamburger;
