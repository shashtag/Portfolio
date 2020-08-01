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

function App() {
  let cards = [
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

  return (
    <div className="App">
      <Home />
      <CardList className="card-container" cards={cards} />
      <Contact />
    </div>
  );
}

export default App;
