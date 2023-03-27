import React from 'react';
import './css/TitlePart.css';
import Nes from '../images/nes-controller.png';
import Panda from '../images/panda.png';
import Rocket from '../images/rocket.png';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx'
/*import Link, { NavLink } from "react-router-dom";*/

function TitlePart (){
    return(
        <div className="title-part">
            <Header/>
            <a href="google.com" className="case">
                <img className="timg" src={Nes} alt="Jeux Vidéo"/>
                <h2>Jeux vidéo</h2>
                <p>Voici quelques jeux video</p>

            </a>
        
            <a className="case">
                <img className="timg" src={Rocket} alt="speedrun"/>
                <h2>Speedruns</h2>
                <p>Présentation de quelques speedruns</p>

            </a>
            
            <a className="case">
                <img className="timg" src={Panda} alt="mes jeux"/>
                <h2>Mes jeux vidéo</h2>
                <p>Je présente mes jeux favoris</p>
            </a>
            <Footer/>
        </div>
    );
}

export default TitlePart;