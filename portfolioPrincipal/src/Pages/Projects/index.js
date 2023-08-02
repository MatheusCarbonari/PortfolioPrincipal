import IntroductionOfProjects from '../../components/ComponentsOfProjects/Introduction'
import Slider from '../../components/ComponentsOfProjects/Slider';
import styles from './Projects.module.css'
import Farewell from '../../components/ComponentsOfProjects/Farewell'

//import Projects
import projects from '../../components/Json/ProjectsSlides.json';

const projectsInReact = projects.filter(item => item.tags === 'React');
const projectsInJS = projects.filter(item => item.tags === 'JS');
const projectsInHymlCss = projects.filter(item => item.tags === 'HtmlCSS');

const Projects = () => {
    
    return (
        <main className={styles.mainProjects__container}>
            <IntroductionOfProjects/>
            <section className={styles.sectionProjects__slider__react}>
                <h2>Projetos em React JS</h2>
                <div>
                    <Slider projects={projectsInReact}/>
                </div>               
            </section>
            <section className={styles.sectionProjects__slider__react}>
                <h2>Projetos com JS</h2>
                <div>
                    <Slider projects={projectsInJS}/>
                </div>               
            </section>
            <section className={styles.sectionProjects__slider__react}>
                <h2>Projetos com HTML e CSS</h2>
                <div>
                    <Slider projects={projectsInHymlCss}/>
                </div>               
            </section>
            <Farewell/>
        </main>
    )
}

export default Projects;