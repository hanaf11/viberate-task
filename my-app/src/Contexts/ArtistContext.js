import React, { createContext, useState } from 'react'


export const ArtistContext = createContext()

function ArtistContextProvider(props) {
  
    return (
        <ArtistContext.Provider value={props.artist}>
            {props.children}
        </ArtistContext.Provider>
    )
}


export default ArtistContextProvider