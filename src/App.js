import React, { Component } from 'react';
import TitlePart from './components/TitlePart';
import {BrowserRouter, Route, Routes, NavLink} from 'react-router-dom';
import './App.css';
import './components/css/Header.css';
import Speedrun from './components/Speedrun';
import Footer from './components/Footer';
import MyGames from './components/MyGames';
import Games from './components/Games';


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
            <Route path="/speedrun" element={<Speedrun/>}></Route>
            <Route path="/mes-jeux" element={<MyGames/>}></Route>
            <Route path="/jeux" element={<Games/>}></Route>
          </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
