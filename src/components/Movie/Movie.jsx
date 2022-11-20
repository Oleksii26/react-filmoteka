import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { searchFilmsByName } from '../helper'

const Movie = () => {
    const [query, setQuery] = useState('')
    const [films, setFilms] = useState([])

    useEffect(() => {

        const getFilmsData = async (query) => {

            try {
                const result = await searchFilmsByName(query)
                setFilms([...result.results])
            } catch (error) {
                alert('Something went wrong')
            }
        }
        if (query !== '') {
            getFilmsData(query)
        }

    }, [query])

    const handleFormSubmit = e => {
        e.preventDefault()
        setQuery(e.target[0].value)
       
    }
    return <> <form onSubmit={handleFormSubmit} action="">
        <input type="text" name="" id="" />
        <button type='submit'>search</button>
    </form>
        <ul>
            {films.map(e => <li key={e.id}><Link to={`${e.id}`} >{e.title || e.name}</Link></li>)}
        </ul>
    </>
}

export default Movie