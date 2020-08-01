import React,{useState} from 'react';

// importing all components
import Navbar from  './navbar/navbar'
import Drawer from './navbar/drawer'
import Backdrop from './navbar/backdrop'
import Contact from './Contact'
import CardList from './CardList'


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
    {image : 'https://www.researchgate.net/profile/Gareth_Roberts10/publication/251839685/figure/fig3/AS:652228557803529@1532514814266/a-A-SEVIRI-400-x-400-pixel-scene-of-southern-Africa-September-4-th-1212pm.png', title: 'Title for img 1'},
    {image : 'https://www.researchgate.net/profile/Gareth_Roberts10/publication/251839685/figure/fig3/AS:652228557803529@1532514814266/a-A-SEVIRI-400-x-400-pixel-scene-of-southern-Africa-September-4-th-1212pm.png', title: 'Title for img 2'},
    {image : 'https://www.researchgate.net/profile/Gareth_Roberts10/publication/251839685/figure/fig3/AS:652228557803529@1532514814266/a-A-SEVIRI-400-x-400-pixel-scene-of-southern-Africa-September-4-th-1212pm.png', title: 'Title for img 2'},
    {image : 'https://www.researchgate.net/profile/Gareth_Roberts10/publication/251839685/figure/fig3/AS:652228557803529@1532514814266/a-A-SEVIRI-400-x-400-pixel-scene-of-southern-Africa-September-4-th-1212pm.png', title: 'Title for img 4'},
    {image : 'https://www.researchgate.net/profile/Gareth_Roberts10/publication/251839685/figure/fig3/AS:652228557803529@1532514814266/a-A-SEVIRI-400-x-400-pixel-scene-of-southern-Africa-September-4-th-1212pm.png', title: 'Title for img 5'}
  ]

  return (
    <div className="App">
      <Navbar hamClickHandler = {hamburerClickHandler} />
      <Drawer show={drawerState} />
      {backdrop}
      {/* div for fixed navbar height remove this and add padding to the hero page  */}
      <div style={{height: '64px'}}></div>
      
      <CardList className="card-container" cards={cards}/>
      <Contact />
    </div>
  );
}

export default App;
