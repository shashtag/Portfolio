import React from 'react';

// importing css

import '../../css/navbar/drawer.css';

// drawer component thath is sohow on click of hamburger?

const drawer = props =>{
  let drawerClass ='drawer';
  if(props.show){
    drawerClass = 'drawer open';
  }
  return(
    <div className={drawerClass}>
      <nav >
        <ul>
          <li><a href="/">About</a></li>
          <li><a href="/">Experience</a></li>
          <li><a href="/">Projects</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
  
};

    
    

export default drawer;