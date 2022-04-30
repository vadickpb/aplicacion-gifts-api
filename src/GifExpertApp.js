import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GiftExpertApp = () => {

    // const categories =  ['goku', 'vegeta', 'one punch']

    const [category, setCategories] = useState(['one punch'])

    // const handleAdd = () => {
    //     return setCategories([...categories, 'Hunter'])
    // }
    return (
        <>
            <h1>GifExpertApp</h1>
            < AddCategory setCategories = {setCategories}  />
            <hr/>

            {/* <button onClick={handleAdd}>Agregar</button> */}
            <ol>
                {
                    category.map(category => {
                        return <GifGrid key = {category} category = {category}/>
                    })
                }
            </ol>
        </>
    )
}

export default GiftExpertApp;