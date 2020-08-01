import React from 'react';

// importing css

import '../../css/navbar/backdrop.css';

// backdrop component 

const backdrop = props =>(
    <div className="backdrop" onClick={props.click} />
);

export default backdrop;