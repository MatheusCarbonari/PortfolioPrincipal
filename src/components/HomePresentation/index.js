import styles from './HomePresentation.module.css';
import avatar from '../../assets/Avatar.png'

const HomePresentation = () => {
    return(
        <div className={styles.presentantion__container}>
            <div className={styles.presentantionImage__container}>
                <img src={avatar} alt='Avatar me representando'/>
                <p>Oi! Eu sou o Matheus</p>
            </div>
            <div className={styles.presentantionText__container}>
                <p>Programação é</p>
                <h2> a arte de criar soluções inteligentes e interativas através da linguagem das máquinas e...</h2>
                <p>...transformar ideias em realidade digital.</p>
            </div>
        </div>
    )
}

export default HomePresentation;