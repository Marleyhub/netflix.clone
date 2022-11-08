import React, { useState } from 'react'
import './Movierow.css'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { width } from '@mui/system'

// eslint-disable-next-line import/no-anonymous-default-export
 export default ({title, items}) => {
   const [scrollX, setScrollX] = useState(-400)

    const handleLeft = () => {
      let x = scrollX + 150 
      if(x > 0){
        x = 0
      }
      setScrollX(x)

    }
    const handleRigth = () => {

    }
    return(
    <div className='movieRow'>
     <h2>{title}</h2>
     <div className='navigation--left' onClick={handleLeft}>
       <NavigateBeforeIcon style={{fontSize: 50}}/>
     </div>
     <div className='navigation--rigth' onClick={handleRigth}>
      <NavigateNextIcon style ={{fontSize: 50}}/>
     </div> 
    <div className='movieRow--listarea'>
      <div className="movieRow--list" style={{
            marginLeft: scrollX,
            width: items.results.length * 150
        }}>
        {items.results.length > 0 && items.results.map((item, key)=>(
            <div key={key} className="movieRow--item">
            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
            </div>
        ))}
        </div>
    </div>
    </div>
    )}
    

