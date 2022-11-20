import { useEffect, useState } from 'react'
import { searchCast } from '../../helper'
import { useParams } from 'react-router-dom'
import { CAST_FEM } from '../../helper'
import { CAST_MAN } from '../../helper'
import { IMAGE } from '../../helper'
import css from './Cast.module.css'

const Cast = () => {
    const [cast, setCast] = useState([])
    const { movieId } = useParams()

    useEffect(() => {
        searchCast(movieId).then(data => setCast(data.cast))
    }, [movieId])
    console.log(cast)
    return <div className={css.container}>
        {cast.map(e => <div>
            <img width={120} src={e.profile_path ? `${IMAGE}${e.profile_path}` : (`${e.gender === 1}` ? CAST_FEM : CAST_MAN)} alt={e.name} />

            <p>{e.name}</p>
        </div>)}
    </div>
}
export default Cast