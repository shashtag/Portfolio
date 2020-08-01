import React from "react";
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

function App() {
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
      <Home />
      <CardList className="card-container" cards={projectCards} />

      <CardList className="card-container" cards={expCards} />
      <Contact />
    </div>
  );
}

export default App;
