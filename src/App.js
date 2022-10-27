import React, { useState, useEffect } from 'react'
import Tmdb from './Tmdb'
import Movierow from './components/Movierow'

export default () => {
    
    const [movieList, setMovieList] = useState([])
   

    useEffect(()=>{
        const loadAll = async () => {
         let list = await Tmdb.getHomeList()
         setMovieList(list)
         console.log(list)
        }
 
    loadAll()
    },[])
    
    return (
        <div className='page'>
         <section className='lists'>
        {movieList.map((item, key) => (

         <Movierow key={key} item={item.item} title={item.title}/>
            
        ))}
         </section>
        </div>
    )
}