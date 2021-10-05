import React from 'react';
import './app.scss';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Panel from './components/panel/panel.component';

function App() {

  // const randomiseBlur = () => {
  //   const body: any = (document.querySelector('body',':before')
  //   const head: any = (getComputedStyle(document.querySelector('head')!, ':before'))
  //   const randomNum =  Math.ceil(Math.random() * (4 - 0 + 1) + 0)
  //   body.setProperty('filter', `blur(${randomNum}px)`)  
  //   console.log(body.style)
  // }

  // randomiseBlur();

  return (
    <div className="App">
      <Header/>
      <Footer/>
      <div className="PanelContainer">
        <Panel title="About" />
      </div>
    </div>
  );
}

export default App;
