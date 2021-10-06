import React from 'react';
import './panel.scss';

interface PanelProps {
  title: string;
  text: string[];
  theme?: string
}

const Panel: React.FC<PanelProps> = ({ title, text, theme = "white" }): JSX.Element => {
  // Regexs for helping parse text props 
  const mailtoRegex = new RegExp('mailto:([^?]*)');
  const linkRegex = new RegExp('(https?:(?:www.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|www.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|https?://(?:www.|(?!www))[a-zA-Z0-9]+.[^s]{2,}|www.[a-zA-Z0-9]+.[^s]{2,})');

  /** Crude parser for rendering correct html content for text content props */
  const parseLine = (line: string) => {

    if (mailtoRegex.test(line)) {
      const emailSplit = line.split('@');
      const emailText = emailSplit[0].replace(/mailto:/, "");
      return <a href={line}>{emailText} at {emailSplit[1]}</a>;
    } else if (linkRegex.test(line)) {
      const webLinkText = line.split('//')[1];
      return <a href={line} rel="noreferrer" target="_blank">{webLinkText}</a>;
    } else {
      return <p>{line}</p>;
    }

  }

  return (
    <div className={`Panel ${ theme }`}>
      <p className="Title"> { title } </p>
      <div className="TextContainer">
        {text.map((line) => <p>{parseLine(line)}</p>)}
      </div>
    </div>
  );

};

export default Panel;