import styles from './WhoIm.module.css';
import imagemTeste from '../../assets/Avatar.png'

const WhoIm = () => {
    return (
        <section className={styles.sectionWhoIm__container}>
            <div className={styles.whoIm__text__container}>
                <h4>Oi, bem vindo</h4>
                <h1>Eu sou o Matheus</h1>
                <p>Busco oportunidade de transição de carreira para área de programação, aplicando minha experiência anterior e adquirindo novos conhecimentos em programação, com o objetivo de contribuir de forma efetiva e alcançar sucesso profissional nessa nova trajetória</p>
            </div>
            <div className={styles.whoIm__image__container}>
                <img src={imagemTeste} alt='imagem avatar'/>
            </div>
        </section>
    )
}

export default WhoIm;