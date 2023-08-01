import Button from '../button';
import styles from './ContentePage.module.css';

const MainPageContent = () => {
    return (
        <div className={styles.conteudo__container}>
            <h4>Desenvolvedor</h4>
            <h1>DevMatheus</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu leo mauris. Mauris vitae urna tristique, rutrum mauris quis, condimentum massa. Nullam tristique turpis vel ligula scelerisque, non sodales velit cursus. Phasellus vel fringilla metus, feugiat mattis quam. Suspendisse a fringilla magna. </p>
            <div>
                <Button to="/home">Portfólio</Button>
                <Button>Portfólio</Button>
            </div>
        </div>
    )
}

export default MainPageContent;