import React, { Component } from 'react';
import TitlePart from './components/TitlePart';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Speedrun from './components/Speedrun';

class App extends Component {
  render() {   
    return (
      <div className="App">
        <header>
          <nav>
              <h2>Test barre de navigation</h2>  
              <ul>
                  <li><NavLink activeClassName="navlink" to="/">Accueil</NavLink></li>
                  <li><NavLink activeClassName="navlink" to="/jeux">Les jeux</NavLink></li>
                  <li><NavLink activeClassName="navlink" to="/mes-jeux">Mes jeux</NavLink></li>
                  <li><NavLink activeClassName="navlink" to="/speedrun">Speedruns</NavLink></li>
              </ul>
          </nav>
          <BrowserRouter>
            <Route exact path="/" element={TitlePart}></Route>
            <Route exact path="/speedruns" element={Speedrun}></Route>
          </BrowserRouter>
        </header>
      </div>
    );
  }
}

export default App;
