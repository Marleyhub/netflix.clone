import React, { useState, useEffect } from 'react'
import Tmdb from './Tmdb'
import Movierow from './components/Movierow'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    
    const [movieList, setMovieList] = useState([])
   

    useEffect(()=>{
        const loadAll = async () => {
         let list = await Tmdb.getHomeList()
         setMovieList(list)
        
        }
 
    loadAll()
    },[])
    
    return (
        <div className='page'>
         <section className='lists'>
        {movieList.map((item, key) => (
         <Movierow key={key} items={item.item} title={item.title}/>
        ))}
         </section>
        </div>
    )
}