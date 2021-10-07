import React from 'react';
import './marquee.scss';

interface MarqueeProps {
  text: string[];
}

const Marquee: React.FC<MarqueeProps> = ({ text }): JSX.Element => {

  return (
    <div className="MarqueeWrapper">
      <div className="MarqueeWrapper__Container">
        <p>
          {text}
        </p>
        <p>
          {text}
        </p>
        <p>
          {text}
        </p>
      </div>
    </div>
  );
}

export default Marquee;