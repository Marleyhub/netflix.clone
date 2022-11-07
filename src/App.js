import React, { useState, useEffect } from 'react'
import Tmdb from './Tmdb'
import Movierow from './components/Movierow'
import './App.css'
import './components/FeaturedMovie'
import FeaturedMovie from './components/FeaturedMovie'
import Header from './components/Header'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    
    const [movieList, setMovieList] = useState([])
    const [FeaturedData, setFeaturedData] = useState(null)
    const [blackHeader, setBlackHeader] = useState(  )

    useEffect(()=>{
        const loadAll = async () => {
         let list = await Tmdb.getHomeList()
         setMovieList(list)
        
        let originals = list.filter(i => i.slug === "originals")
        let randomChosen = Math.floor(Math.random() * (originals[0].item.results.length - 1))
        let chosen = originals[0].item.results[randomChosen]
        let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
        setFeaturedData(chosenInfo)

        }
 
    loadAll()

    },[])

    useEffect(()=>{
        const scrollListener = () => {
            if(window.scrollY > 10){
                setBlackHeader(true)
            }else{
                setBlackHeader(false)
            }}
            window.addEventListener('scroll', scrollListener)
            return() =>{
            window.removeEventListener('scroll', scrollListener)
        }
    },[])
    
    return (
        <div className='page'>
            <Header black={blackHeader}/>

            {FeaturedData && <FeaturedMovie item={FeaturedData}/> }

         <section className='lists'>
        {movieList.map((item, key) => (
         <Movierow key={key} items={item.item} title={item.title}/>
        ))}
         </section>
         <footer className='footer'>
             Feito exclusivamente para fins didaticos <br/>
             Desenvolvoido por Gabriel Marley <br/>
             Dados ultilizados do Themoviedb.org
         </footer>   
        </div>
    )
}