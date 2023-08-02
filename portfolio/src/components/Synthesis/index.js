import styles from './Synthesis.module.css';
import testImage from '../../assets/Avatar.png';

const Synthesis = () => {
    return (
        <section className={styles.sectionSynthesis__container}>
            <div className={styles.synthesis__second__container}>
                <div className={styles.synthesis__image__container}>
                    <img src={testImage} alt='imagem avatar'/>
                </div>
                <div className={styles.synthesis__text__container}>
                    <h2>Síntese</h2>
                    <p>Busco oportunidade de transição de carreira para a programação, combinando minha paixão por programação e meu histórico de formação, como JS, HTML, CSS e PHP. Motivado e adaptável, estou comprometido em adquirir novos conhecimentos e contribuir de forma significativa para o sucesso da equipe e da organização</p>
                </div>
            </div>
        </section>
    )
}

export default Synthesis;