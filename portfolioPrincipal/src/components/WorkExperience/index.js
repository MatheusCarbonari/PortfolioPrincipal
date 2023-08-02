import CardsOfExperience from '../CardsOfExperience';
import styles from './WorkExperience.module.css';
import js from '../../assets/JavaScript_logo.png'
import reactLogo from '../../assets/React_logo2.png'
import htmlLogo from '../../assets/HTML5_logo2.png'
import cssLogo from '../../assets/CSS-logo3.png'

const WorkExperience = () => {
    return (
        <>
            <h1 className={styles.workExperience__title}>Experiencia em:</h1>
            <section className={styles.workExperience__container}>
                <CardsOfExperience image={js}>
                    <h2>JavaScript</h2>
                    <p>JavaScript, criando interações dinâmicas e funcionais em projetos web. Resolvo desafios de programação com eficiência e criei projetos pessoais, e desafios envolvendo JS</p>
                </CardsOfExperience>
                <CardsOfExperience image={reactLogo}>
                    <h2>React JS</h2>
                    <p>Iniciei minha jornada com React, explorando a criação de interfaces dinâmicas. Comprometido em expandir meu conhecimento, trabalhei em projetos, focando em desenvolver habilidades essenciais.</p>
                </CardsOfExperience>
                <CardsOfExperience image={htmlLogo}>
                    <h2>HTML</h2>
                    <p>Possuo base sólida em HTML, criando estruturas fundamentais para páginas web. Desenvolvi projetos iniciantes, focando na construção de layouts bem organizados e acessíveis.</p>
                </CardsOfExperience>
                <CardsOfExperience image={cssLogo}>
                    <h2>CSS</h2>
                    <p>Familiarizado com CSS, estilizo páginas web para uma estética atraente e consistente. Colaborei em projetos básicos, concentrando-me na formatação de elementos e na criação de layouts responsivos.</p>
                </CardsOfExperience>
            </section>
        </>
    )
}

export default WorkExperience;