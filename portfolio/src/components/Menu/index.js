import Logo from '../Logo';
import MenuLink from '../MenuLink';
import styles from './Menu.module.css';

const Menu = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav__container}>
                <Logo to="/"/>
                <ul>
                    <li>
                        <MenuLink to="/home">Home</MenuLink>
                        <MenuLink to="/home/aboutme">About Me</MenuLink>
                        <MenuLink to="/home/projects">Projects</MenuLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Menu;