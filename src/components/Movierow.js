import React from 'react'
import './Movierow.css'


export default ({title, items}) => {

    console.log(items)
    console.log(title)

    return(
    <div>
     <h2>{title}</h2>
    <section>
        {items.results.length > 0 && items.results.map((item, key)=>(
            <img src={`https://image.tmdb/t/p/w300${item.poster_path}`}/>
        ))}
    </section>
    </div>
    )}
    

