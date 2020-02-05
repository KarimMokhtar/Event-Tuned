import React from 'react';
import Carrousel from './Carrousel';
const Featured = () =>{
    return(
        <div style={{position:'relative'}}>
            <Carrousel />
            <div className="artist_name">
                <div className="wrapper">
                    Ariana Grand
                </div>
            </div>
        </div>
    )
}
export default Featured;