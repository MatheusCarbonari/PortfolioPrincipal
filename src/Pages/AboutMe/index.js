import WhoIm from '../../components/WhoIm'
import styles from './AboutMe.module.css'
import Synthesis from '../../components/Synthesis'
import Education from '../../components/Education'
import AboutMeContact from '../../components/AboutMeContact'

const AboutMe = () => {
    return (
        <main className={styles.mainAboutMe__container}>
            <WhoIm/>
            <Synthesis/>
            <Education/>
            <AboutMeContact/>
        </main>
    )
}

export default AboutMe