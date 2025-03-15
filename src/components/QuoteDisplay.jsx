import React from 'react';

import './QuoteDisplay.css';

const QuoteDisplay = ({ weather }) => {
  const quotes = {
    Clear: "It's a beautiful day! Enjoy the sunshine!",
    Clouds: "A little rain never hurt anyone. Stay positive!",
    Rain: "Let the rain wash away your worries.",
    Snow: "Embrace the chill and enjoy the beauty of snow!",
    Haze: "Even in haze, there's beauty. Keep your spirits high!",
    Mist: "Mist brings a sense of mystery. Enjoy the calm."
  };

const quote = weather &&  quotes[weather[0].main] ? quotes[weather[0].main] : "Stay motivated!";



  return (
    <div className="quote-display">
      <p>{quote}</p>
    </div>
  );
};

export default QuoteDisplay;
