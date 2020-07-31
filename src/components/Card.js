import React from 'react'
import { render } from '@testing-library/react'

import '../css/card.css'

const Card = props => {

        console.log('[cards.js] rendering ...')
        return (
            <div className='card-body'>
                <img src={props.image} className='card-image' alt=''></img>
                <div>
                    <div className='card-title'>
                        {props.title}
                    </div>
                    <div className='card-content'>
                        {props.content}
                    </div>
                    <div className='button-container'>
                    <button className='card-button'>Home</button>
                    </div>
                    </div>
            </div>
        );
};

export default Card;