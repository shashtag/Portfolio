import React, { Component } from "react";

import image from "../My_pic.jpeg";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="laptop">
          <div className="split right">
            <div className="image">
              <img src={image} alt="My Profile Pic" />
            </div>
          </div>
          <div className="split left">
            <div className="desc">
              <h2>Hey there!</h2>
              <h2>I am a Web Developer</h2>
              <h2>A UI / UX Enthusiast</h2>
            </div>
          </div>
        </div>
        <div className="ipad">
          <div className="image">
            <img src={image} alt="My Profile Pic" />
          </div>
          <div className="desc">
            <h2>Hey there!</h2>
            <h2>I am a Web Developer</h2>
            <h2>A UI / UX Enthusiast</h2>
          </div>
        </div>
        <div className="intro">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
