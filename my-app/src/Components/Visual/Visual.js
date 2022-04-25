import React, { useContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import '../../html-css-sample/styles/styles.css'
import { ArtistContext } from '../../Contexts/ArtistContext';

function Visual() {
    const artist=useContext(ArtistContext);
    return (
        <div className="col visual"> 

        <figure style={{backgroundImage: `url(${artist.image})`}}>
          <figcaption>
            <button className="btn btn-claim-music-id">Claim music_id</button>
          </figcaption>
        </figure>
        
      </div>
    );
  }
  
  export default Visual;