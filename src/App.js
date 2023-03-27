import React, { Component } from 'react';
import TitlePart from './components/TitlePart';
import {BrowserRouter, Route, Routes, NavLink} from 'react-router-dom';
import './App.css';
import './components/css/Header.css';
import Speedrun from './components/Speedrun';
import './components/css/Footer.css';
class App extends Component {
  
  render() {   
    return (     
      <BrowserRouter> 
        <div className="App">
          <Routes>
            <Route exact path="/" element={TitlePart}></Route>
            <Route exact path="/speedruns" element={Speedrun}></Route>
          </Routes>
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
          </header>
          <footer>
            test footer
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
