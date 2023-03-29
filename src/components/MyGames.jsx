import React from 'react';
import './css/TitlePart.css';
import Nes from '../images/nes-controller.png';
import Panda from '../images/panda.png';
import Rocket from '../images/rocket.png';


function MyGames (){
    return(
        <div className="title-part">
            
            <a href="google.com" className="case">
                <img className="timg" src={Nes} alt="Jeux Vidéo"/>
                <h2>Jeux 1</h2>
                <p>Voici quelques jeux video</p>

            </a>
        
            <a className="case">
                <img className="timg" src={Rocket} alt="speedrun"/>
                <h2>Jeux 2</h2>
                <p>Présentation de quelques speedruns</p>

            </a>
            
            <a className="case">
                <img className="timg" src={Panda} alt="mes jeux"/>
                <h2>Jeux 3</h2>
                <p>Je présente mes jeux favoris</p>
            </a>
            
        </div>
    );
}

export default MyGames;