import React from 'react';
import './panel.scss';

interface PanelProps {
  title: string;
  text: string[];
  theme?: string
}

const Panel: React.FC<PanelProps> = ({ title, text, theme = "white" }): JSX.Element => {

  // lines = 

  return (
    <div className={`Panel ${ theme }`}>
      <p className="Title"> { title } </p>
      <div className="TextContainer">
        {text.map((line) => <p>{line}</p>)}
      </div>
    </div>
  );

};

export default Panel;