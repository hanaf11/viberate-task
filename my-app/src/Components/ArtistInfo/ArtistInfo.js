import React from 'react';
import { useContext } from 'react';
import '../../html-css-sample/styles/styles.css'
import { ArtistContext } from '../../Contexts/ArtistContext';
import Tooltip from '../Tooltip/Tooltip';


function ArtistInfo() {
    const artist=useContext(ArtistContext);
   
  return (
    <div className="col info">

    <div className="col-content">
    
        <div className="info-wrapper">

            <div className="title-wrapper">
             {artist.booking ? (
                   <button  className="btn btn-solid border btn-booking-request">Booking Request</button>
             ) 
             :
            (
                <br/>
             )}
              
                  
             
                <h1 className="title">
                  {artist.name}
                  
                    <div className="tooltip-wrapper">
                       
                       {artist.claimed ? (
                            <span className="profile-claimed">Profile claimed</span>
                       ): (
                        <span className="profile-claimed:not"></span>
                       )}
                      <Tooltip/>
                    </div>
                    
                    {artist.trending? (
                        <span className="trending-icon">Trending</span>
                    ):(
                        <span className="trending-icon:not"></span>
                    )}
                    
                </h1>
            </div>

            <div className="row">
                <button className="btn btn-save long">Follow</button>
                <button className="btn btn-share">
                    Share
                    <span>Link copied to clipboard</span>
                </button>
            </div>

            <div className="row">
                <label>Origin</label>
                <a className="btn btn-filter-tag">{artist.country.name}</a>
            </div>

            <div className="row">
                <label>Genre</label>
                <span className="btn btn-filter-tag">{artist.genre.name}</span>
            </div>

            <div className="row">
                <label>Subgenres</label>

                {  artist.subgenres.map((genre) => {
                                    return (
                                        <span key={genre.id} className="btn btn-filter-tag">{genre.name}</span>
                 
                                    );
                                })
                                 }   

                <div className="tooltip-wrapper">
                    <button className="btn btn-add">Add subgenre</button>
                   <Tooltip/>
                </div>
            </div>

        </div>

        <div className="footer-detail">
        
        <ul className="social-list">
        {  artist.social_links.map((social) => {
             let socialIcon="btn social-icon "+social.channel;
            return (
               
                <li key={social.channel}>
                    
                    <a href={social.link} target="_blank" className={socialIcon}>{social.channel}</a>
                </li>
            );
        })
         }  
         </ul>  
            
           

            <div className="tooltip-wrapper">
                    <button className="btn btn-add">Add links</button>
                    <div className="tooltip">
                        <h3>Got more info?</h3>
                        <p>Add Place's links so everyone can see their social media highlights.</p>
                        <p>
                            <button className="btn btn-shadow">Add links</button>
                        </p>
                    </div>
                </div>

        </div>

    </div>

</div>


  );
}

export default ArtistInfo;
