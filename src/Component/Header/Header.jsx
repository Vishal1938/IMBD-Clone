import React from 'react'
import {Link} from 'react-router-dom'
import "./Header.css"

export default function HeaderCom() {
  return (
    <div className='header'>
        <div className='HeaderLeft'>
            <Link to="/"><img className='header_icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" 
            style={{height:"50px",width:"70px"}}/></Link>
            <Link to="/movies/popular" className='LinkStyle'>Popular</Link>
            <Link to="/movies/top_rated" className='LinkStyle'>Top Rated</Link>
            <Link to="/movies/upcoming" className='LinkStyle'>Upcoming</Link>
        </div>
      
    </div>
  )
}
