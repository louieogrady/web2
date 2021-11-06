import React from 'react';
import './marquee.scss';

interface MarqueeProps {
  text: string[];
}

const Marquee: React.FC<MarqueeProps> = ({ text }): JSX.Element => {

  /** Iterate over array of strings and render inside span tag */ 
  const sentences = text.map((t, i) => <span key={i.toString()}> {t} </span> );

  return (

    <div className="MarqueeWrapper">
      <div className="MarqueeContainer">
        <div className="MarqueeContainer__Inner">
          <p className="Sentence">
            { sentences }
          </p>
          <p className="Sentence Sentence--speed1">
            { sentences }
          </p>
        </div>
      </div>
    </div>

  );
}

export default Marquee;