import React, { Fragment } from 'react';
import './app.scss';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Panel from './components/panel/panel.component';
import Marquee from './components/marquee/marquee.component';

function App() {

  const aboutText = [`Louie is a frontend web developer with over 2 years professional experience.`, '\n \n As a web developer he is excited about creating innovative browser based user experiences. He is also very interested in how blockchain can change the future of the web, functional programming and DevOps.', '\n \n He currently works at thortful'];
  const skillsText = ['TypeScript, JavaScript (ES5/ES6+), Angular 2+, RxJS, React, Redux Toolkit, Jasmine, React Testing Library, Tone.js, Material UI, HTML5, Responsive CSS, REST, Git, Jenkins, npm'];
  const previousText = ['Louie studied Contemporary Music Composition at the Royal Welsh College of Music (RWCMD) and has an MA in Art from the Manchester School of Art (MIRIAD).', '\n \n As a multidisciplinary artist, he has over 5 years experience of delivering commissioned work from the initial proposal stage to installing work onsite across Europe.', '\n \n He has exhibited work at the Wellcome Collection, Brass International Festival, Gallery Miroslav Kraljevic and London Short Film Festival.'];
  const contactText = ['mailto:l.ogrady@gmail.com', 'https://linkedin.com/in/louieogrady', 'https://soundcloud.com/muesliboys'];
  const marqueeText = ['oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo'];
  const projectText = ['https://rhythm-composer.herokuapp.com'];

  // Regexs for parsing text content
  const mailtoRegex = new RegExp('mailto:([^?]*)');
  const linkRegex = new RegExp('(https?:(?:www.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|www.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|https?://(?:www.|(?!www))[a-zA-Z0-9]+.[^s]{2,}|www.[a-zA-Z0-9]+.[^s]{2,})');

  /** Iterate over array of strings and pass each line to parser to render */
  const renderLine = (text: string[]): JSX.Element[] => text.map((line, i) => parseLine(line, i));

  /** Crude parser for rendering correct html content for text content */
  const parseLine = (line: string, i: number): JSX.Element => {
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

  return (
    <div className="App">
      <Header />
      <Footer />
      <Marquee text={marqueeText} />
      <div className="PanelColumn">
        <div className="PanelWrapper">
          <Panel title="ABOUT" >  
            <p>{aboutText}</p>
          </Panel>
        </div>
        <div className="PanelWrapper black">
          <Panel title="SKILLS" theme="black" >
            <p>{skillsText}</p>
          </Panel>
        </div>
        <div className="PanelWrapper black">
          <Panel title="PROJECTS" theme="links" >
            <>{renderLine(projectText)}</>
          </Panel>
        </div>
        <div className="PanelWrapper black">
          <Panel title="PREVIOUS" theme="black" >
            <p>{previousText}</p>
          </Panel>
        </div>
        <div className="PanelWrapper black">
          <Panel title="CONTACT / LINKS" theme="links" >
            <>{renderLine(contactText)}</>
          </Panel>
        </div>
      </div>
    </div>
  );
}

export default App;
