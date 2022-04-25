
import React, { useContext } from 'react';
import { ArtistContext } from '../../Contexts/ArtistContext';
import '../../html-css-sample/styles/styles.css'


function Tooltip() {
    const artist=useContext(ArtistContext);
  return (
    <div className="tooltip">
    <h3>Vote for subgenres</h3>
    <p>Don’t agree with the subgenres? Add the ones you think are missing or vote for existing to get yours on top!</p>
    <div className="stats-sheet">

         {  artist.subgenres.map((genre) => {
            return (
                <div key={genre.id} className="row">
                <h5>{genre.name}</h5>
                <div className="graph-line">
              <span className="line" style={{width:`${genre.score}%`}}>{genre.score}%</span>
                </div>
                </div>

            );
        })
         }    
    </div>
    <p>
          <button className="btn btn-shadow">Vote now</button>
     </p>
    </div>
  );
}

export default Tooltip;
