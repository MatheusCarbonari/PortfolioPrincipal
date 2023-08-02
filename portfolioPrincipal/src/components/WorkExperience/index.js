import CardsOfExperience from '../CardsOfExperience';
import styles from './WorkExperience.module.css';
import js from '../../assets/JavaScript_logo.png'
import reactLogo from '../../assets/React_logo.png'

const WorkExperience = () => {
    return (
        <>
            <h1 className={styles.workExperience__title}>Experiencia em:</h1>
            <section className={styles.workExperience__container}>
                <CardsOfExperience image={js}>
                    <h2>JavaScript</h2>
                    <p>Desenvolvendo sites com JavaScript, estudando o mesmo na Alura. BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla</p>
                </CardsOfExperience>
                <CardsOfExperience image={reactLogo}>
                    <h2>React JS</h2>
                    <p>Desenvolvendo sites com JavaScript, estudando o mesmo na Alura. BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla</p>
                </CardsOfExperience>
                <CardsOfExperience image={reactLogo}>
                    <h2>React JS</h2>
                    <p>Desenvolvendo sites com JavaScript, estudando o mesmo na Alura. BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla</p>
                </CardsOfExperience>
                <CardsOfExperience image={reactLogo}>
                    <h2>React JS</h2>
                    <p>Desenvolvendo sites com JavaScript, estudando o mesmo na Alura. BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla BlaBla</p>
                </CardsOfExperience>
            </section>
        </>
    )
}

export default WorkExperience;