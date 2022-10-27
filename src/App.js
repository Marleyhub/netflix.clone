import React, { useState, useEffect } from 'react'
import Tmdb from './Tmdb'
import Movierow from './components/Movierow'
import './App.css'
import './components/FeaturedMovie'
import FeaturedMovie from './components/FeaturedMovie'
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    
    const [movieList, setMovieList] = useState([])
    const [FeaturedData, setFeaturedData] = useState([])

    useEffect(()=>{
        const loadAll = async () => {
         let list = await Tmdb.getHomeList()
         setMovieList(list)
        
        let originals = list.filter(i => i.slug === "originals")
        let randomChosen = Math.floor(Math.random() * (originals[0].item.results.length - 1))
        let chosen = originals[0].item.results[randomChosen]

        console.log(chosen)
        }
 
    loadAll()

    },[])
    
    return (
        <div className='page'>

            {FeaturedData && <FeaturedMovie item={FeaturedData}/> }

         <section className='lists'>
        {movieList.map((item, key) => (
         <Movierow key={key} items={item.item} title={item.title}/>
        ))}
         </section>
        </div>
    )
}