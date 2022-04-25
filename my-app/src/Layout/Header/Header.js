import React, { useReducer } from 'react';
import axios from "axios";
import '../../html-css-sample/styles/styles.css'
import { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { ReactComponent as YourSvg } from '../../html-css-sample/exercise-01_files/logo-v.svg';


function reducer(state,action){
    switch(action.type){
        case 'link':return {id:action.payload};
        default:throw new Error();
    }
}

function Header() {
    const [artistList,setArtistList]=useState();
    const [state,dispatch]=useReducer(reducer,{id:'7c46c4ce-09c0-4f95-b4e1-84ae10bd24ab'})
    let navigate = useNavigate();

    useEffect(()=>{

       navigate('/'+state.id);

        axios.get("https://run.mocky.io/v3/3cab6663-7cd8-4365-b8a6-4a1d89305f6a")
        .then(response=>{ 
            setArtistList(response.data.all_artists);
           
         
        })
        .catch(error=>{
            console.log("error fetching data" + error);
        })
    
    },[state.id])


 if(artistList!=null){
    return (
   <div className='header'>
      <div className="page">

    <a href="#" className="logo">
     <YourSvg/>
    </a>

    <nav className="navigation-primary">

        <ul className="menu-sys">
        <li>
            <button className="btn btn-menu search">Search</button>
        </li>
        <li>
            <button className="btn btn-menu more">More</button>
        </li>
        
        </ul>
    
    <ul className="menu">
       {  artistList.map((artist) => {
       return (
                <li key={artist.artist_uuid}>
                      <a onClick={()=>dispatch({type:'link',payload:artist.artist_uuid})}>{artist.artist_name}</a>
                </li>
                 
              );
          })
       }
     </ul>
        

</nav>

</div>
 </div>
  );}
}

export default Header;