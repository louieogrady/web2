import React from 'react';
import './app.scss';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Panel from './components/panel/panel.component';

function App() {

  const aboutText = ['Hello this is a test text', 'it should split on every comma', 'hopefully it does']

  return (
    <div className="App">
      <Header/>
      <Footer/>
      <div className="PanelContainer">
        <Panel title="About" text={aboutText} />
      </div>
    </div>
  );
}

export default App;
