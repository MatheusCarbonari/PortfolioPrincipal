import IntroductionOfProjects from '../../components/ComponentsOfProjects/Introduction'
import Slider from '../../components/ComponentsOfProjects/Slider';
import styles from './Projects.module.css'


const Projects = () => {
    
    return (
        <main className={styles.mainProjects__container}>
            <IntroductionOfProjects/>
            <Slider></Slider>
        </main>
    )
}

export default Projects;