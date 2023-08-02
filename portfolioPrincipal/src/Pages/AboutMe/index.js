import WhoIm from '../../components/WhoIm'
import styles from './AboutMe.module.css'
import Synthesis from '../../components/Synthesis'
import Education from '../../components/Education'
import AboutMeContact from '../../components/AboutMeContact'

const textoAboutMeContact = "Fico grato por visitar meu portfólio! Se você deseja saber mais sobre meu trabalho, experiências e projetos, ou se gostaria de discutir possíveis oportunidades de colaboração, sinta-se à vontade para entrar em contato comigo. Estou ansioso para trocar ideias e contribuir para futuros projetos emocionantes. Aguardo o seu contato!"

const titleAboutMeContact = "Entre em Contato"

const AboutMe = () => {
    return (
        <main className={styles.mainAboutMe__container}>
            <WhoIm/>
            <Synthesis/>
            <Education/>
            <AboutMeContact text={textoAboutMeContact} title={titleAboutMeContact}/>
        </main>
    )
}

export default AboutMe