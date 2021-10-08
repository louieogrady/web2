import React, { Fragment } from 'react';
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
  const parseLine = (line: string, i: number) => {

    if (mailtoRegex.test(line)) {
      const emailSplit = line.split('@');
      const emailText = emailSplit[0].replace(/mailto:/, "");
      return <Fragment key={i.toString() + 'frag'}><a key={i.toString()} href={line}> {emailText} at {emailSplit[1]} </a><br></br></Fragment>;
    } else if (linkRegex.test(line)) {
      const webLinkText = line.split('//')[1];
      return <Fragment key={i.toString() + 'frag'}><a key={i.toString()} href={line} rel="noreferrer" target="_blank">{webLinkText}</a><br></br></Fragment>;
    } else {
      return <p key={i.toString()}>{line}</p>;
    }

  }
  
  /** Iterate over array of strings and passing each line to parser and render in p tag */
  const renderLine = () => text.map((line, i) => parseLine(line, i) );

  return (
    <div className={`Panel ${ theme }`}>
      <p className="Title"> 
        { title } 
      </p>
      <div className="TextContainer">
        { renderLine() }
      </div>
    </div>
  );

};

export default Panel;