import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { searchRewievs } from "components/helper"

const Rewievs = () => {
    const { movieId } = useParams()
    const [movie, setMovie] = useState([])


    useEffect(() => {
        searchRewievs(movieId).then(data => setMovie(data.results))
    }, [movieId])

    return <div>
        <h2>Rewievs</h2>
        {movie.map(e => <div key={e.id}><h4>{e.author}</h4>
            <p >{e.content}</p>
        </div>)}
    </div>
}
export default Rewievs