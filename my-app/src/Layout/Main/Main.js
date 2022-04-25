import React, { createContext } from 'react';
import { useParams } from "react-router-dom";
import { useState,useEffect, useContext } from "react";
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import '../../html-css-sample/styles/styles.css';
import Visual from '../../Components/Visual/Visual';
import ArtistContextProvider from '../../Contexts/ArtistContext';
import ArtistInfo from '../../Components/ArtistInfo/ArtistInfo';
import Stats from '../Stats/Stats';


function ArtistDetail() {
  let param=useParams();
  let url;
  const [artist,setArtist]=useState(null);
  const ArtistContext=createContext();
  useEffect(()=>{
       
    if(param.artist_uuid==null){
        url="https://run.mocky.io/v3/7c46c4ce-09c0-4f95-b4e1-84ae10bd24ab";
    }
    else{url=`https://run.mocky.io/v3/${param.artist_uuid}`;}

    axios.get(url)
    .then(response=>{
    
        setArtist(response.data.data);
      
    })
    .catch(error=>{
        console.log("error fetching data" + error);
       
    })

},[param])

if(artist!=null){
  return (
    <main className="main" >

    <section className="section section-artist-detail trending claimed">


      <div className="page" style={{minHeight:'100vh'}}>
      
      
      <ArtistContextProvider artist={artist}>
       <Visual/>
       <div className='col-wrapper'>
       <ArtistInfo/>
       <Stats/>
       </div>
       </ArtistContextProvider>
   
      <button className="btn btn-scroll-down">Scroll down</button>

      </div>
  

    </section>


  </main>
  );
}
}

export default ArtistDetail;