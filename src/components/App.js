import React,{useState} from 'react';

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
import Navbar from  './navbar/navbar';
import Drawer from './navbar/drawer';
import Backdrop from './navbar/backdrop';



function App() {

  // navbar functions and variables

  const [drawerState, setDrawerState] = useState(false);


  const hamburerClickHandler = () =>{
    setDrawerState(!drawerState)
  };

  const backdropClickHandler = () =>{
    setDrawerState(false)
  };

  let backdrop;

  if(drawerState){
    backdrop = <Backdrop click={backdropClickHandler} />
  }


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
      <Navbar hamClickHandler = {hamburerClickHandler} />
      <Drawer show={drawerState} />
      {backdrop}
      {/* div for fixed navbar height remove this and add padding to the hero page  */}
      <div style={{height: '64px'}}></div>
      <CardList className="card-container" cards={cards}/>
      <Home />
      <CardList className="card-container" cards={cards} />
      <Contact />
    </div>
  );
}

export default App;
