import React from 'react'

import Card from './Card'
import '../css/cardlist.css'

const CardList = props => {
    console.log('[CardList.js] rendering...');
    let cards = props.cards.map((card) => {
        return (
            <Card 
            image={card.image}
            title={card.title}
            content={card.content}
            />
        );
    });

    return(
        <div className="card-container">
            {cards}
        </div>
    );
};

export default CardList;