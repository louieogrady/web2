import React from 'react';
import './panel.scss';

interface PanelProps {
  title: string;
  text: string[];
}

const Panel: React.FC<PanelProps> = ({ title, text }): JSX.Element => {

  // lines = 

  return (
    <div className="Panel">
      <p className="Title"> { title } </p>
      <div className="TextContainer">
        {text.map((line) => <p>{line}</p>)}
      </div>
    </div>
  );

};

export default Panel;