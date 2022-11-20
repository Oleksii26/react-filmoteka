import { useState, useEffect } from "react"
import { popularFilms } from "components/helper"
import { Link, useLocation } from 'react-router-dom'

const Home = () => {
    const [films, setFilms] = useState([])
    const { pathname, search } = useLocation()
    useEffect(() => {
        popularFilms().then(data => setFilms(data.results))
    }, [])

    return <div>
        <h2>Popular Films</h2>
        <ol>
            {films.map(e => <Link to={`/movies/${e.id}`} state={{ from: `${pathname}${search}` }}><li key={e.id}>{e.title || e.name}</li></Link>)}
        </ol>
    </div>
}
export default Home