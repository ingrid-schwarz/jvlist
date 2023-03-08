import React, { Component } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx'
import TitlePart from './components/TitlePart';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Speedrun from './components/Speedrun';

class App extends Component {
  render() {
    <Switch>
      <Route exact path = "/" component = {TitlePart}></Route>
      <Route exact path = "/speedruns" component = {Speedrun}></Route>
    </Switch>
    return (
      <div className="App">
        <Header />
        <TitlePart />
        <Footer />
      </div>
    );
  }
}

export default App;
