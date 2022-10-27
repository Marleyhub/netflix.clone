import React from 'react'
import './Movierow.css'


export default ({title, item}) => {

    return(
    <div>
     <h2>{title}</h2>
    <section>
        {item.results.length > 0 && item.results.map((item, key)=>(
            <img src={`https://image.tmdb/t/p/w300${item.poster_path}`}/>
        ))}
    </section>
    </div>
    )}
    

