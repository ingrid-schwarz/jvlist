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
          
          <header>
            <nav>
                <h2>Test barre de navigation</h2>  
                <ul>
                    <li><NavLink activeClassName="navlink" to="/" element={<TitlePart/>}>Accueil</NavLink></li>
                    <li><NavLink activeClassName="navlink" to="/jeux">Les jeux</NavLink></li>
                    <li><NavLink activeClassName="navlink" to="/mes-jeux">Mes jeux</NavLink></li>
                    <li><NavLink activeClassName="navlink" to="/speedrun" element={Speedrun}>Speedruns</NavLink></li>
                </ul>
            </nav>   
          </header>
          
          <Routes>
            <Route path="/" element={<TitlePart/>}></Route>
            <Route path="/speedruns" element={<Speedrun/>}></Route>
          </Routes>

          <footer>
            test footer
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
