import { NavLink } from 'react-router-dom';
import styles from './MenuLink.module.css';

const MenuLink = ({children, to}) => {
    return (
        <NavLink 
            className={({ isActive}) => `
                ${styles.link}
                ${isActive ? styles.link__destacado : ""}    
            `}
            to={to}
            end
        >
            {children}
        </NavLink>
    )
}

export default MenuLink;