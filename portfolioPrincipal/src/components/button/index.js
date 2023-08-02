import { NavLink } from 'react-router-dom';
import styles from './Button.module.css';

const Button = ({children, to}) => {
    return (
        <NavLink to={to}>
            <button className={styles.button}>
                {children}
            </button>
        </NavLink>
    )
}

export default Button;