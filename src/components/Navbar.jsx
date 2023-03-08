import React from 'react';
import './css/NavBar.css';
import Link, { NavLink } from "react-router-dom";

function Navbar (){
    return(
        <nav>
            <h2>Test barre de navigation</h2>  
            <ul>
                <li><NavLink className="navlink">Accueil</NavLink></li>
                <li><NavLink className="navlink">Les jeux</NavLink></li>
                <li><NavLink className="navlink">Mes jeux</NavLink></li>
                <li><NavLink className="navlink">Speedruns</NavLink></li>
            </ul>

        </nav>
    );
}
export default Navbar;