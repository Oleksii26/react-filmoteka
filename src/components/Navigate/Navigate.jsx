import { NavLink, useLocation } from 'react-router-dom'
import css from './Nvigate.module.css' 

const Navigate = () => {
const locationMovie = useLocation()

    return <nav className={css.nav}>
        <NavLink className={css.link} to='/' >Home</NavLink>
        <NavLink className={css.link} to='/movies' state={{from: locationMovie}}>Movies</NavLink>
    </nav>
}
export default Navigate