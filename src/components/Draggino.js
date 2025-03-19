import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Draggable from 'react-draggable';
import { GET_POSTSHome } from '../lib/queries';



const Draggino = () => {
  const router = useRouter(); // Ottieni il percorso attuale

  return (
    <div style={{background:'yellow',border:'10px solid red'}} className="draggable-container">
          <Draggable>
            <div>
            <img src='https://www.quattrozampeinfamiglia.it/wp-content/uploads/2024/10/cani-da-riporto.jpg'/>
          </div>
          </Draggable>
          <Draggable>
            <div>
            <img src='https://www.quattrozampeinfamiglia.it/wp-content/uploads/2024/10/cani-da-riporto.jpg'/>
          </div>
          </Draggable>
          <Draggable>
            <div className="draggable-box">Moe me!</div>
          </Draggable>
    
        </div>
  );
};



export default Draggino;
