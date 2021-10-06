import React from 'react';
import './app.scss';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Panel from './components/panel/panel.component';

function App() {

  const aboutText = [`Louie is a frontend web developer with over 2 year's professional experience.`, ' \n His main experience is with Javascript/Typescript and Angular 2+, but also has experience working with React and Redux Toolkit.', '\n As a web developer he is excited about creating innovative browser based user experiences. But he is also very interested in functional programming and devOps.'];
  const previousText = ['Louie studied Contemporary Music Composition at the Royal Welsh College of Music (RWCMD) and has an MA in Art from the Manchester School of Art (MIRIAD).', '\n As a multidisciplinary artist, he has over 5 years experience of delivering commissioned work from the initial proposal stage to installing work onsite across Europe.'];

  return (
    <div className="App">
      <Header/>
      <Footer/>
      <div className="PanelColumn">
        <div className="PanelWrapper">
          <Panel title="ABOUT" text={aboutText} />
        </div>
        <div className="PanelWrapper black">
          <Panel title="PREVIOUS" text={previousText} theme="black"/>
        </div>
        <div className="PanelWrapper">
          <Panel title="PREVIOUS" text={aboutText} />
        </div>
      </div>
    </div>
  );
}

export default App;
