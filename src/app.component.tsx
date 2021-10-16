import React from 'react';
import './app.scss';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Panel from './components/panel/panel.component';
import Marquee from './components/marquee/marquee.component';

function App() {

  const aboutText = [`Louie is a frontend web developer with over 2 years professional experience.`, '\nHis core expertise is with Javascript/Typescript and Angular 2+, but he has recently been working with React and Redux Toolkit.', '\nAs a web developer he is excited about creating innovative browser based user experiences. He is also very interested in how blockchain can change the future of the web, functional programming and devOps.', '\nHe currently works at thortful'];
  const previousText = ['Louie studied Contemporary Music Composition at the Royal Welsh College of Music (RWCMD) and has an MA in Art from the Manchester School of Art (MIRIAD).', '\nAs a multidisciplinary artist, he has over 5 years experience of delivering commissioned work from the initial proposal stage to installing work onsite across Europe.', '\nHe has exhibited work at the Wellcome Collection, Brass International Festival, Gallery Miroslav Kraljevic and London Short Film Festival.'];
  const contactText = ['mailto:l.ogrady@gmail.com', 'https://linkedin.com/in/louieogrady', 'https://soundcloud.com/muesliboys'];
  const marqueeText = ['An entity, bent, a face, painted blue, boundaried in green, alone.', 'Thoughtspace pallasades everywhere, somewhere in utopia I cast concrete for novel purposes, to feel concrete, for guests to view.', 'Not here, today, airless, soft countenance, nature sounds, this is truly heaven.'];

  return (
    <div className="App">
      <Header />
      <Footer />
      <Marquee text={marqueeText} />
      <div className="PanelColumn">
        <div className="PanelWrapper">
          <Panel title="ABOUT" text={aboutText} />
        </div>
        <div className="PanelWrapper black">
          <Panel title="PREVIOUS" text={previousText} theme="black" />
        </div>
        <div className="PanelWrapper black">
          <Panel title="CONTACT / LINKS" text={contactText} theme="links" />
        </div>
      </div>
    </div>
  );
}

export default App;
