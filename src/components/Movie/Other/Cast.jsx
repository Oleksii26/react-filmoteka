import { useEffect, useState } from 'react'
import { searchCast } from '../../helper'
import { useParams, Link, Outlet } from 'react-router-dom'
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
    return <div className={css.container}>
        {cast.map(e => <div key={e.id}>
            <img width={120} src={e.profile_path ? `${IMAGE}${e.profile_path}` : (e.gender ? CAST_MAN : CAST_FEM)} alt={e.name} />
            <p> <Link to={`${e.id}`}>{e.name}</Link></p>
            <Outlet />
        </div>)}
    </div>
}
export default Cast