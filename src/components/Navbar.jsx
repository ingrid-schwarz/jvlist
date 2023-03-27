import React from 'react';
import './css/NavBar.css';
import { NavLink } from "react-router-dom";

function Navbar (){
    return(
        <nav>
            <h2>Test barre de navigation</h2>  
            <ul>
                <li><NavLink activeClassName="navlink" to="/">Accueil</NavLink></li>
                <li><NavLink activeClassName="navlink" to="/jeux">Les jeux</NavLink></li>
                <li><NavLink activeClassName="navlink" to="/mes-jeux">Mes jeux</NavLink></li>
                <li><NavLink activeClassName="navlink" to="/speedrun">Speedruns</NavLink></li>
            </ul>
        </nav>
    );
}
export default Navbar;