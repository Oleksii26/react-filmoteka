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
            {films.map((e, i ) => <li key={e.id + i}><Link to={`/movies/${e.id}`} state={{ from: `${pathname}${search}` }}>{e.title || e.name}</Link></li>)}
        </ol>
    </div>
}
export default Home