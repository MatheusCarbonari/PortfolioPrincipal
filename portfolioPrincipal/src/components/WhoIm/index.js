import styles from './WhoIm.module.css';
import imagemTeste from '../../assets/Avatar.png'

const WhoIm = () => {
    return (
        <section className={styles.sectionWhoIm__container}>
            <div className={styles.whoIm__text__container}>
                <h4>Oi, bem vindo</h4>
                <h1>Eu sou o Matheus Carbonari</h1>
                <p>Um apaixonado por desenvolvimento, atualmente focado em aprimorar minhas habilidades. Minha jornada recente inclui projetos onde explorei a construção de interfaces interativas e responsivas. Comprometido com a aprendizagem contínua, estou ansioso para enfrentar desafios e continuar crescendo como desenvolvedor</p>
            </div>
            <div className={styles.whoIm__image__container}>
                <img src={imagemTeste} alt='imagem avatar'/>
            </div>
        </section>
    )
}

export default WhoIm;