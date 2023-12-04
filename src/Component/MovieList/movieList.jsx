import React, {useEffect, useState} from "react"
import "./movieList.css"
import { useParams } from "react-router-dom"
import Cards from "../Cards/CardComponent"

const MovieList = () => {
    
    const [movieList, setMovieList] = useState([])
    const {type} = useParams()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [type])

    const getData = () => {
        
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=9d6f702bb3043d07cdf4b2ed2e9b0f91&language=en-US`)
        .then(res => res.json())
        .then(data=>setMovieList(data.results))
        .catch(console.error("Not able to fetch data"))
    }

    return (
        <div className="movie__list">
            <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="list__cards">
                {
                   movieList?.map((movie) => (
                    <Cards key={movie.id} movie={movie} />
                ))
                }
            </div>
        </div>
    )
}

export default MovieList;