import React from 'react';
import './css/Game.css';
import Nes from '../images/nes-controller.png';
import Panda from '../images/panda.png';
import Rocket from '../images/rocket.png';

function Games (){
    return(
        <div className='game'>
            <h1>Jeux Vidéo</h1>
            <img src={Nes}/>
        </div>
    );
}

export default Games;