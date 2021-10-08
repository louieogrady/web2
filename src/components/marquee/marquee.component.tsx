import React from 'react';
import './marquee.scss';

interface MarqueeProps {
  text: string[];
}

const Marquee: React.FC<MarqueeProps> = ({ text }): JSX.Element => {

  const sentences = text.map((t) => <span> {t} </span>)

  return (

    <div className="MarqueeWrapper">
      <div className="MarqueeContainer">
        <div className="MarqueeContainer__Inner">
          <p>
            {sentences}
          </p>
        </div>
      </div>
    </div>

  );
}

export default Marquee;