import Button from '../button';
import styles from './ContentePage.module.css';

const MainPageContent = () => {
    return (
        <div className={styles.conteudo__container}>
            <h4>Bem-Vindo(a) ao Meu Mundo Digital</h4>
            <h1>Pode me chamar de Matheus</h1>
            <p>Aqui, convido você a mergulhar em minha jornada no desenvolvimento web. Sou movido pela paixão de criar soluções digitais envolventes. Explore minha evolução, projetos e descobertas nesta jornada emocionante. Sinta-se em casa e desfrute da minha jornada pelo mundo do desenvolvimento.</p>
            <div>
                <Button to="/home">Portfólio</Button>
                <Button to="https://github.com/MatheusCarbonari">Github</Button>
            </div>
        </div>
    )
}

export default MainPageContent;