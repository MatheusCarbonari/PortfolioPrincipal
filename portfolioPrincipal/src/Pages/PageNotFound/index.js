import Button from 'components/button';
import styles from './PageNotFound.module.css';

const PageNotFound = () => {
    return(
        <section className={styles.pageNotFound__container}>
            <h1>Oops! Parece que você navegou para território desconhecido. Retorne ao caminho digital ou explore mais do meu portfólio. Obrigado por sua compreensão!</h1>
            <Button to="/home">
                Home
            </Button>
        </section>
    )
}

export default PageNotFound;