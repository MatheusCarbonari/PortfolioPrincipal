import SocialMedia from '../../SocialMedia';
import AboutMeContact from '../../AboutMeContact';
import styles from './Farewell.module.css';

const textFarewell = "Agradeço imensamente por dedicar seu tempo para explorar meu portfólio. Espero que tenha apreciado conhecer um pouco sobre mim e meus projetos. Sua visita é valiosa e inspiradora. Se tiver qualquer pergunta ou oportunidade de colaboração, não hesite em entrar em contato. Até breve e obrigado novamente!"

const titleFarewall = "Agradeço por Sua Visita"

const Farewell = () => {
    return(
        <section className={styles.stilesfarewll__conyainer}>
            <AboutMeContact text={textFarewell} title={titleFarewall}/>
        </section>
    )
}

export default Farewell;