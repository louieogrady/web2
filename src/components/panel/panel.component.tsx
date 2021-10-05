import React from 'react';
import './panel.scss';

interface PanelProps {
  title: string
}

const Panel: React.FC<PanelProps> = ({ title }): JSX.Element => {

  return (
    <div className="panel">
      <p> { title } </p>
    </div>
  );

};

export default Panel;