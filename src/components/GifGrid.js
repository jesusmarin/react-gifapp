//rafc
import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
 import { GridGifItem } from './GridGifItem';

export const GifGrid = ({ category }) => {
    
    
    const { data:images, loading } = useFetchGifs(category);
     
    
   
    return (
        <div>
            <h3>{ category }</h3>
            { loading && <p className=" animate_animated animate__flash">Cargando...</p> }
             <div className="card-grid animate_animated animate__bounce">
                {
                    images.map(gif => (
                        <GridGifItem
                            key={gif.id}
                            {...gif}
                        />
                    ))
                }
            </div> 
        </div>
    )
}
