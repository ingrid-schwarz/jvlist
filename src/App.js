import React, { Component } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx'
import TitlePart from './components/TitlePart';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Speedrun from './components/Speedrun';

class App extends Component {
  render() {   
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" element={TitlePart}></Route>
          <Route exact path="/speedruns" element={Speedrun}></Route>
        </Switch>
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
