import React from 'react';
import './panel.scss';

interface PanelProps {
  title: string;
  theme?: string,
  children: JSX.Element
}

const Panel: React.FC<PanelProps> = ({ title, theme = "white", children }): JSX.Element => {

  return (
    <div className={`Panel ${theme}`}>
      <p className="Title">
        {title}
      </p>
      <div className="TextContainer">
        {children}
      </div>
    </div>
  );

};

export default Panel;