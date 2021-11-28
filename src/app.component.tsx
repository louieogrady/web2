import React from 'react';
import './app.scss';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Panel from './components/panel/panel.component';
import Marquee from './components/marquee/marquee.component';

function App() {

  const aboutText = [`Louie is a frontend web developer with over 2 years professional experience.`, '\nAs a web developer he is excited about creating innovative browser based user experiences. He is also very interested in how blockchain can change the future of the web, functional programming and devOps.', '\nHe currently works at thortful'];
  const skillsText = ['TypeScript, JavaScript (ES5/ES6+), Angular 2+, RxJS, React, Redux Toolkit, Jasmine, React Testing Library, Tone.js, Material UI, HTML5, Responsive CSS, REST, Git, Jenkins, npm'];
  const previousText = ['Louie studied Contemporary Music Composition at the Royal Welsh College of Music (RWCMD) and has an MA in Art from the Manchester School of Art (MIRIAD).', '\nAs a multidisciplinary artist, he has over 5 years experience of delivering commissioned work from the initial proposal stage to installing work onsite across Europe.', '\nHe has exhibited work at the Wellcome Collection, Brass International Festival, Gallery Miroslav Kraljevic and London Short Film Festival.'];
  const contactText = ['mailto:l.ogrady@gmail.com', 'https://linkedin.com/in/louieogrady', 'https://soundcloud.com/muesliboys'];
  const marqueeText = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut erat vel quam consectetur convallis in in est. Sed ac nibh accumsan, interdum lorem a, feugiat nunc. Nunc eu mollis est. Quisque at tortor nec metus pretium hendrerit at eu leo. Fusce volutpat euismod sem non commodo. Aenean quis enim.'];
  const projectText = ['https://rhythm-composer.herokuapp.com'];

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
          <Panel title="SKILLS" text={skillsText} theme="black" />
        </div>
        <div className="PanelWrapper black">
          <Panel title="PROJECTS" text={projectText} theme="links" />
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
