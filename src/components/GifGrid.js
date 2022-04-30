import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifts } from '../helpers/getGifts';
import { GiftGridItem } from './GiftGridItem';

export const GifGrid = ( { category } ) => {


    const {data, loading} = useFetchGifs( category )

    return (
    <>
        <h3>{ category }</h3>

        { loading && <p>Cargando..</p> }
        <div className="card-grid">
            
                {
                    data.map(( img ) =>(

                        <GiftGridItem 
                            key = {img.id} 
                            {...img} 
                        />
                    ) 
                    )
                }
                
        </div>
    </>
    )
}
