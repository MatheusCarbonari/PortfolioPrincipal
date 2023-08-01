import styles from './Logo.module.css'
import logo from '../../assets/M.png'
import { NavLink } from 'react-router-dom';

const Logo = ({to}) => {
    return (
        <div className={styles.logo__container}>
            <NavLink to={to} end>
                <img src={logo} alt='Logo em formato de M'/>
            </NavLink>
        </div>
    )
}

export default Logo;