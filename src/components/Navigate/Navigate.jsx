import { NavLink } from 'react-router-dom'
import css from './Nvigate.module.css' 

const Navigate = () => {
    return <nav className={css.nav}>
        <NavLink className={css.link} to='/'>Home</NavLink>
        <NavLink className={css.link} to='/movies'>Movies</NavLink>
    </nav>
}
export default Navigate