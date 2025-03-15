import React, { useState } from 'react';
import cards from './FlashcardData';

function Flashcard({ cardNumber, setFlipped, flipped }) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    }

    const cardStyle = {
        backgroundColor: cards[cardNumber].color
    };

    return (
        <div className={`flip-card ${isFlipped ? "flipped" : ""}`}  onClick={handleClick}>
            <div className='flip-card-inner' style={cardStyle}>
                <div className='flip-card-front' style={cardStyle}>
                    {cards[cardNumber].front}
                </div>
                <div className='flip-card-back' style={cardStyle}>
                    {cards[cardNumber].back}
                </div>

            </div>
        </div>
        
    );
}

export default Flashcard;


/* {isFlipped ? 
    <div className="back" style={cardStyle}> {isFlipped ? cards[cardNumber].back : ''} </div> 
    : 
    <div className="front" style={cardStyle}> {isFlipped ? '' : cards[cardNumber].front} </div>
} */