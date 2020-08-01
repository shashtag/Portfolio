import React, { useState } from "react";

// importing all components
import Home from "./Home";
import Contact from "./Contact";
import CardList from "./CardList";
import blog from "../assests/blog.jpg";
import calc from "../assests/calc.jpg";
import ecomm from "../assests/ecomm.jpg";
import quote from "../assests/quote.jfif";
import tictactoe from "../assests/tictactoe.png";
import worldmap from "../assests/worldmap.gif";
import c from "../assests/c-logo-transparent.png";
import cpp from "../assests/cpp_logo.png";
import html from "../assests/html-logo.webp";
import js from "../assests/js-logo.png";
import matlab from "../assests/Matlab-Logo.png";
import python from "../assests/python-logo.png";
import Navbar from "./navbar/navbar";
import Drawer from "./navbar/drawer";
import Backdrop from "./navbar/backdrop";

function App() {
  // navbar functions and variables

  const [drawerState, setDrawerState] = useState(false);

  const hamburerClickHandler = () => {
    setDrawerState(!drawerState);
  };

  const backdropClickHandler = () => {
    setDrawerState(false);
  };

  let backdrop;

  if (drawerState) {
    backdrop = <Backdrop click={backdropClickHandler} />;
  }

  let projectCards = [
    {
      image: blog,
      title: "Blog Website",
    },
    {
      image: calc,
      title: "Calculator",
    },
    {
      image: ecomm,
      title: "E-Commerce Website",
    },
    {
      image: quote,
      title: "Quote Generator",
    },
    {
      image: tictactoe,
      title: "Tic Tac Toe",
    },
    {
      image: worldmap,
      title: "Data on World Map",
    },
  ];

  let expCards = [
    {
      image: c,
      title: "C language",
    },
    {
      image: cpp,
      title: "C++",
    },
    {
      image: html,
      title: "HTML",
    },
    {
      image: js,
      title: "Java Script",
    },
    {
      image: matlab,
      title: "MatLab",
    },
    {
      image: python,
      title: "Python",
    },
  ];

  return (
    <div className="App">
      <Navbar hamClickHandler={hamburerClickHandler} />
      <Drawer show={drawerState} />
      {backdrop}
      {/* div for fixed navbar height remove this and add padding to the hero page  */}
      <div style={{ height: "64px" }}></div>
      <Home />
      <CardList className="card-container" cards={projectCards} />

      <CardList className="card-container" cards={expCards} />
      <Contact />
    </div>
  );
}

export default App;
