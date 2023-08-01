import MainImage from '../../components/MainImage';
import styles from './InicialPage.module.css';
import MainPageContent from '../../components/MainPageContent';

const InicialPage = () => {
    return (
        <section className={styles.inicialPage__container}>
            <MainImage/>
            <MainPageContent/>
        </section>
    )
}

export default InicialPage;