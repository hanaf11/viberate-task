import axios from 'axios';
import { useParams } from "react-router-dom";
import React from 'react';
import {useState,useEffect,useContext} from 'react';
import { ArtistContext } from '../../Contexts/ArtistContext';
import { ResponsiveBar } from '@nivo/bar';



function StatsBar(){
    let param=useParams();
    const [artist,setArtist]=useState(useContext(ArtistContext));
    useEffect(()=>{
       if(param.artist_uuid!=artist.artist_uuid){
        axios.get(`https://run.mocky.io/v3/${param.artist_uuid}`)
        .then(response=>{
        
            setArtist(response.data.data);
          
        })
        .catch(error=>{
            console.log("error fetching data" + error);
           
        })
       }
      
    },[param])

   return(
       <div style={{maxWidth:245, height:200}}>
      

        <ResponsiveBar
        data={artist.popularity}
        keys={['percentage']}
        indexBy='city'
        layout='horizontal'
        maxValue={10}
        padding={0.8}
        colors={'black'}
        reverse={false}
        enableLabel={true}
        enableGridX={false}
        enableGridY={false}
        label='city'
        labelTextColor='black'
    />
   
   
</div>
   )
}
export default StatsBar;