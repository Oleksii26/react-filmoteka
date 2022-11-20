import { useEffect, useState } from 'react'
import { useParams, useNavigate, Outlet } from 'react-router-dom'
import { searchFilmById } from '../helper'
import { IMAGE } from '../helper'
import { Link } from 'react-router-dom'
import css from './MovieDetails.module.css'
import { NO_IMAGES } from '../helper'


const MovieDetails = () => {
    const navigation = useNavigate()
    const { movieId } = useParams()
    const [films, setFilms] = useState([])
    useEffect(() => {
        searchFilmById(movieId).then(data => setFilms(data))
    }, [movieId])
    const { backdrop_path, title, name, release_date, genres, overview, production_countries, popularity, vote_average } = films
    return <div>
        <Link onClick={() => navigation(-1)} className={css.link}>◄Back</Link>
        <div className={css.container}>
            <img src={backdrop_path ? `${IMAGE}${backdrop_path}`:NO_IMAGES} alt={title || name} />
            <div>
                <h2>{title || name}</h2>
                <p>{`${release_date}`.slice(0, 4) || 'unknown infirmations'}</p>
                <p>Popularity: {popularity}</p>
                <p>Genres: {genres ? genres.map(e => e.name).join(', ') : 'unknown infirmations'}</p>
                <h3>Overview</h3>
                <p>Vote Average:{(vote_average * 1).toFixed(1)}/10</p>
                <p>{overview}</p>
                <p>Production countries: {production_countries ? production_countries.map(e => e.name) : 'unknown infirmations'}</p>
            </div>
        </div>
        <Link to='cast'>Cast</Link>
        <Link to='rewievs'>Rewievs</Link>
        <Outlet/>
    </div>
}

export default MovieDetails