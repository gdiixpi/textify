import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Contact from './components/Contact';
import DarkModeToggle from 'react-dark-mode-toggle'
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  if (isDarkMode === true){
    document.body.style.backgroundColor = 'black';
    document.body.style.transition = '0.5s';
  }
  else{
    document.body.style.backgroundColor = 'white';
    document.body.style.transition = '0.5s';
  }
  

  return (
    <>
    <Router>

      <div className="toggle">
          <DarkModeToggle
            onChange={setIsDarkMode}
            checked={isDarkMode}
            size={60}
          />
      </div> 
      <Navbar title="Textify" mode={isDarkMode} />

      <Switch>
          <Route exact path="/">
            <TextForm mode={isDarkMode} />
          </Route>
          <Route exact path="/about">
            <About mode={isDarkMode} />
          </Route>
          <Route exact path="/contact">
            <Contact mode={isDarkMode} />
          </Route>
      </Switch>

    </Router>
    
    </>
  );
}

export default App;
